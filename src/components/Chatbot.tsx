import React, { useState, useRef, useEffect } from 'react';
import Logo from './Logo';

const BOT_NAME = 'WebDemics AI';

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: `Hello! 👋 I am ${BOT_NAME}. How can I help you today?` }
  ]);
  const [lead, setLead] = useState({ name: '', email: '', phone: '' });
  // Set to 'done' to bypass lead-capture and enable chat immediately
  const [leadStep, setLeadStep] = useState<'name' | 'email' | 'phone' | 'done'>('done');
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    // when chat opens or messages change, keep focus in the input
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [messages, open]);

  const sendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (loading) return;
    if (!input.trim()) return;
    // Lead capture logic
    if (leadStep !== 'done') {
      let nextStep: typeof leadStep = leadStep;
      if (leadStep === 'name') {
        setLead(l => ({ ...l, name: input }));
        setMessages(msgs => [...msgs, { sender: 'user', text: input }]);
        setInput('');
        setMessages(msgs => [...msgs, { sender: 'bot', text: 'Great! May I have your email?' }]);
        nextStep = 'email';
      } else if (leadStep === 'email') {
        setLead(l => ({ ...l, email: input }));
        setMessages(msgs => [...msgs, { sender: 'user', text: input }]);
        setInput('');
        setMessages(msgs => [...msgs, { sender: 'bot', text: 'And your phone number?' }]);
        nextStep = 'phone';
      } else if (leadStep === 'phone') {
        setLead(l => ({ ...l, phone: input }));
        setMessages(msgs => [...msgs, { sender: 'user', text: input }]);
        setInput('');
        setMessages(msgs => [...msgs, { sender: 'bot', text: `Thank you, ${input}! How can I help you today?` }]);
        nextStep = 'done';
      }
      setLeadStep(nextStep);
      // ensure the input is focused for the next step
      setTimeout(() => inputRef.current?.focus(), 0);
      return;
    }
    // Normal chat
    const userMsg = { sender: 'user', text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const apiUrl = 'http://localhost:5000/api/chat';
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            messages: [...[...messages, userMsg].map(m => ({ role: m.sender === 'user' ? 'user' : 'assistant', content: m.text }))]
          })
      });
      if (!res) {
        console.error('No response from fetch to', apiUrl);
      }
      let data = null;
      try { data = await res.json(); } catch (e) { /* ignore JSON parse errors */ }
      if (!res.ok) {
        const errMsg = data?.error || data?.details || res.statusText || 'Unknown error from server';
        setMessages((msgs) => [...msgs, { sender: 'bot', text: `Error: ${errMsg}` }]);
      } else {
        const reply = data?.reply ?? (data?.choices?.[0]?.message?.content) ?? 'Sorry, no reply received.';
        setMessages((msgs) => [...msgs, { sender: 'bot', text: reply }]);
      }
    } catch (err) {
      const errText = err?.message || String(err);
      setMessages((msgs) => [...msgs, { sender: 'bot', text: `Request failed: ${errText}` }]);
    }
    setLoading(false);
    // clear input (already cleared) and keep focus so user can type next message
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 1000,
          background: '#D4AF37',
          border: 'none',
          borderRadius: '50%',
          width: 64,
          height: 64,
          boxShadow: '0 4px 24px rgba(212, 175, 55, 0.18)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        aria-label="Open Chatbot"
      >
        <Logo />
      </button>
      {/* Chat Window */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: 110,
            right: 32,
            width: 350,
            maxWidth: '90vw',
            background: '#0d0d0d',
            borderRadius: 16,
            boxShadow: '0 8px 32px rgba(212, 175, 55, 0.18)',
            zIndex: 1001,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
            <div style={{ background: '#D4AF37', color: '#000000', padding: '1rem', display: 'flex', alignItems: 'center', gap: 12 }}>
            <Logo />
            <span style={{ fontWeight: 700, fontSize: 18 }}>{BOT_NAME}</span>
            <span style={{ marginLeft: 'auto', cursor: 'pointer', fontWeight: 700 }} onClick={() => setOpen(false)}>&times;</span>
          </div>
            <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', background: '#0d0d0d' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ marginBottom: 12, textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
                <span
                  style={{
                    display: 'inline-block',
                      background: msg.sender === 'user' ? '#D4AF37' : '#1a1a1a',
                      color: msg.sender === 'user' ? '#000000' : '#D4AF37',
                    borderRadius: 12,
                    padding: '8px 14px',
                    fontSize: 15,
                    maxWidth: 220,
                    wordBreak: 'break-word',
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
            <form onSubmit={sendMessage} style={{ display: 'flex', borderTop: '1px solid #2d2d2d', background: '#0d0d0d' }}>
            <input
              type="text"
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder={loading ? 'Waiting for reply...' : 'Type your message...'}
              
                style={{ flex: 1, border: 'none', padding: '1rem', fontSize: 15, outline: 'none', background: '#0d0d0d', color: '#D4AF37' }}
            />
              <button type="submit" disabled={loading || !input.trim()} style={{ background: '#D4AF37', color: '#000000', border: 'none', padding: '0 18px', fontWeight: 700, fontSize: 16, borderRadius: 0, cursor: 'pointer' }}>
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;

import React, { useState, useRef, useEffect } from 'react';
import Logo from './Logo';

const BOT_NAME = 'WebDemics AI';

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: `Hello! 👋 I am ${BOT_NAME}. Before we start, may I know your name, email, and phone number?` }
  ]);
  const [lead, setLead] = useState({ name: '', email: '', phone: '' });
  const [leadStep, setLeadStep] = useState<'name' | 'email' | 'phone' | 'done'>('name');
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const sendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
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
      return;
    }
    // Normal chat
    const userMsg = { sender: 'user', text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: 'You are a professional, friendly, and helpful business assistant for WebDemics. Answer all queries about the business, services, and support.' },
            ...[...messages, userMsg].map(m => ({ role: m.sender === 'user' ? 'user' : 'assistant', content: m.text }))
          ]
        })
      });
      const data = await res.json();
      setMessages((msgs) => [...msgs, { sender: 'bot', text: data.reply }]);
    } catch (err) {
      setMessages((msgs) => [...msgs, { sender: 'bot', text: 'Sorry, I could not process your request right now.' }]);
    }
    setLoading(false);
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
          background: '#E5B80B',
          border: 'none',
          borderRadius: '50%',
          width: 64,
          height: 64,
          boxShadow: '0 4px 24px rgba(229, 184, 11, 0.18)',
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
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 8px 32px rgba(229, 184, 11, 0.18)',
            zIndex: 1001,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          <div style={{ background: '#E5B80B', color: '#fff', padding: '1rem', display: 'flex', alignItems: 'center', gap: 12 }}>
            <Logo />
            <span style={{ fontWeight: 700, fontSize: 18 }}>{BOT_NAME}</span>
            <span style={{ marginLeft: 'auto', cursor: 'pointer', fontWeight: 700 }} onClick={() => setOpen(false)}>&times;</span>
          </div>
          <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', background: '#fff' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ marginBottom: 12, textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
                <span
                  style={{
                    display: 'inline-block',
                    background: msg.sender === 'user' ? '#E5B80B' : '#f7f7f7',
                    color: msg.sender === 'user' ? '#fff' : '#b3860b',
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
          <form onSubmit={sendMessage} style={{ display: 'flex', borderTop: '1px solid #eee', background: '#fff' }}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder={loading ? 'Waiting for reply...' : 'Type your message...'}
              disabled={loading}
              style={{ flex: 1, border: 'none', padding: '1rem', fontSize: 15, outline: 'none', background: '#fff', color: '#b3860b' }}
            />
            <button type="submit" disabled={loading || !input.trim()} style={{ background: '#E5B80B', color: '#fff', border: 'none', padding: '0 18px', fontWeight: 700, fontSize: 16, borderRadius: 0, cursor: 'pointer' }}>
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;

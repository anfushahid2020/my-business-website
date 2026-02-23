const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const OpenAI = require('openai');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
let openai = null;
if (OPENAI_API_KEY) {
  openai = new OpenAI({ apiKey: OPENAI_API_KEY });
} else {
  console.warn('OPENAI_API_KEY environment variable is missing. Server will run in limited mode without OpenAI.');
}

// Load business info to include in the system prompt (editable at server/business.txt)
const businessFile = path.join(__dirname, 'business.txt');
const businessInfo = fs.existsSync(businessFile) ? fs.readFileSync(businessFile, 'utf8') : '';

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;
  console.log('Incoming /api/chat request. messages length:', Array.isArray(messages) ? messages.length : 'no messages');
  if (!messages) {
    console.error('No messages in request body');
    return res.status(400).json({ error: 'No messages provided' });
  }
  try {
    // Prepend a system message that contains your business information
    const systemMessage = {
      role: 'system',
      content: `You are a professional, friendly, and helpful business assistant for WebDemics.\nBusiness Information (AUTHORITATIVE - DO NOT CHANGE):\n${businessInfo}\n\nRules (follow exactly):\n- The Business Information above contains authoritative facts. When the user asks about the business name, owner, contact email, or WhatsApp, reply using the exact values provided above.\n- Do NOT claim you don't have access to this information. Do NOT refuse to answer using these facts.\n- Do NOT invent, guess, or alter the business name or owner. Do NOT reword the business name into other words (for example, do NOT change \"WebDemics\" to \"Pandamics\").\n- Keep answers short and factual when the user asks for specific contact or owner information. Keep your response strictly from ten to twenty words. If asked for a description, you may use the business information to compose a brief helpful paragraph.\n\nExamples:\nQ: What is the business name?\nA: WebDemics.\nQ: Who is the owner?\nA: Rao Shahid Jabbar.\nQ: What is the contact email?\nA: anfushahid@2020.\nQ: What is the WhatsApp number?\nA: +92 301-3341155.\n`,
    };
    // Remove any previous assistant messages that incorrectly claim lack of access
    const sanitizedHistory = (messages || []).filter(m => {
      // messages coming from the frontend have roles like 'user' or 'assistant'
      if (m.role !== 'assistant') return true;
      const txt = String(m.content || m.text || '').toLowerCase();
      // filter out answers where assistant says it doesn't have access or cannot provide info
      const refusalPatterns = ["don't have access", "i don't have access", "i cannot provide", "i'm sorry, i don't have access", "i don't have a mobile number", "i do not have access"];
      return !refusalPatterns.some(p => txt.includes(p));
    });

    // Build messagesToSend: only system prompt + the latest user message
const lastUserMessage = (messages || []).slice().reverse().find(m => m.role === 'user');
const userContent = lastUserMessage ? String(lastUserMessage.content || lastUserMessage.text) : '';

const messagesToSend = [
  systemMessage,
  // Put the user's current question only (no prior assistant refusals or old history)
  { role: 'user', content: userContent || 'Hello' }
];

    // DEBUG: log system message and last user message so you can verify what is sent
    try {
      console.log('--- SYSTEM PROMPT (truncated 1000 chars) ---');
      console.log(String(systemMessage.content).slice(0, 1000));
      console.log('--- messagesToSend length:', messagesToSend.length);
      const lastUser = messagesToSend.slice().reverse().find(m => m.role === 'user');
      console.log('--- last user message:', lastUser ? lastUser.content : '<none>');
    } catch (e) {
      console.error('Failed to log debug info', e);
    }

    // STRICT BUSINESS.TXT RESPONDER (no OpenAI):
    // Parse businessInfo into fields and answer only from that data. If the question
    // is not covered, respond with the fallback message per the user's protocol.
    const lc = (userContent || '').toLowerCase();

    const extractLine = (label) => {
      const re = new RegExp('^' + label + '\\s*[:\\-]\\s*(.+)$', 'im');
      const m = businessInfo.match(re);
      return m ? m[1].trim() : null;
    };
    const extractBlock = (label) => {
      const re = new RegExp(label + '\\s*:\\s*\\n([\\s\\S]*?)(?:\\n\\s*\\n|$)', 'i');
      const m = businessInfo.match(re);
      if (!m) return null;
      return m[1].split(/\\r?\\n/).map(s => s.replace(/^\\s*-\\s*/, '').trim()).filter(Boolean);
    };

    const name = extractLine('Name') || extractLine('Business') || 'WebDemics';
    const owner = extractLine('Owner') || extractLine('Founder');
    const email = extractLine('Contact Email') || extractLine('Email');
    const whatsapp = extractLine('WhatsApp') || extractLine('Phone') || extractLine('Contact');
    const purpose = extractBlock('Purpose')?.join(' ') || extractLine('Purpose') || extractLine('Aim') || extractLine('Goal');
    const services = extractBlock('Services') || null;
    const target = extractBlock('Target customers') || [extractLine('Target customers')] || null;

    // Helper to format response according to required protocol
    const formatReply = (body) => {
      const prefix = 'Based on our business information, ';
      let reply = prefix + body;
      return reply;
    };

    // Direct fact answers
    if (lc.match(/\\b(business name|what is (?:the )?business name|what is webdemics|my business name)\\b/)) {
      const resp = `The business name is ${name}.`;
      return res.json({ reply: formatReply(resp) });
    }
    if (lc.match(/\\b(owner|who is the owner|who's the owner)\\b/)) {
      if (owner) return res.json({ reply: formatReply(`The owner is ${owner}.`) });
    }
    if (lc.match(/\\b(email|contact email|email address)\\b/)) {
      if (email) return res.json({ reply: formatReply(`You can reach us at ${email}.`) });
    }
    if (lc.match(/\\b(whatsapp|phone|mobile|contact number)\\b/)) {
      if (whatsapp) return res.json({ reply: formatReply(`Our contact number / WhatsApp is ${whatsapp}.`) });
    }
    if (lc.match(/\\b(purpose|aim|goal)\\b/)) {
      if (purpose) return res.json({ reply: formatReply(purpose) });
    }
    if (lc.match(/\\b(service|services|offer|courses|what do you offer)\\b/)) {
      if (services && services.length) {
        const bullets = services.map(s => `- ${s}`).join('\\n');
        const body = `Our services include:\\n${bullets}`;
        return res.json({ reply: formatReply(body) });
      }
    }
    if (lc.match(/\\b(target|customers|who (?:are|is) your customers)\\b/)) {
      if (target && target.length) {
        const body = `Target customers:\\n${target.map(t => `- ${t}`).join('\\n')}`;
        return res.json({ reply: formatReply(body) });
      }
    }

    // If not matched, fall back to OpenAI for free-form responses (hybrid mode)
    try {
      if (!openai) {
        const fallbackEmail = email || 'anfushahid@2020';
        return res.json({ reply: `OpenAI is not configured. Please contact our support team at ${fallbackEmail}` });
      }
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: messagesToSend,
        max_tokens: 500,
        temperature: 0.7,
      });
      const reply = completion.choices?.[0]?.message?.content ?? '';
      console.log('OpenAI reply length:', reply.length);
      return res.json({ reply });
    } catch (err) {
      console.error('OpenAI error:', err);
      const fallbackEmail = email || 'anfushahid@2020';
      return res.json({ reply: `I don't have information about that. Please contact our support team at ${fallbackEmail}` });
    }
  } catch (error) {
    console.error('OpenAI error:', error);
    const details = error?.response?.data ?? null;
    res.status(500).json({ error: error.message, details });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

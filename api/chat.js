const fs = require('fs');
const path = require('path');
const OpenAI = require('openai');

module.exports = async (req, res) => {
  // Allow only POST
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
  let openai = null;
  if (OPENAI_API_KEY) {
    openai = new OpenAI({ apiKey: OPENAI_API_KEY });
  }

  // Load business info (server/business.txt)
  const businessFile = path.join(__dirname, '..', 'server', 'business.txt');
  const businessInfo = fs.existsSync(businessFile) ? fs.readFileSync(businessFile, 'utf8') : '';

  const { messages } = req.body || {};
  if (!messages) return res.status(400).json({ error: 'No messages provided' });

  try {
    const systemMessage = {
      role: 'system',
      content: `You are a professional, friendly, and helpful business assistant for WebDemics.\nBusiness Information (AUTHORITATIVE - DO NOT CHANGE):\n${businessInfo}\n\nRules (follow exactly):\n- The Business Information above contains authoritative facts. When the user asks about the business name, owner, contact email, or WhatsApp, reply using the exact values provided above.\n- Do NOT claim you don't have access to this information. Do NOT refuse to answer using these facts.\n- Do NOT invent, guess, or alter the business name or owner. Do NOT reword the business name into other words.\n- Keep answers short and factual when the user asks for specific contact or owner information. Keep your response strictly from ten to twenty words. If asked for a description, you may use the business information to compose a brief helpful paragraph.\n`,
    };

    const lastUserMessage = (messages || []).slice().reverse().find(m => m.role === 'user');
    const userContent = lastUserMessage ? String(lastUserMessage.content || lastUserMessage.text) : '';

    const messagesToSend = [systemMessage, { role: 'user', content: userContent || 'Hello' }];

    // Simple rule-based short answers from business.txt
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

    const formatReply = (body) => {
      const prefix = 'Based on our business information, ';
      let reply = prefix + body;
      return reply;
    };

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

    if (!openai) {
      const fallbackEmail = email || 'anfushahid@2020';
      return res.json({ reply: `OpenAI is not configured. Please contact our support team at ${fallbackEmail}` });
    }

    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: messagesToSend,
        max_tokens: 500,
        temperature: 0.7,
      });
      const reply = completion.choices?.[0]?.message?.content ?? '';
      return res.json({ reply });
    } catch (err) {
      console.error('OpenAI error:', err);
      const fallbackEmail = email || 'anfushahid@2020';
      return res.json({ reply: `I don't have information about that. Please contact our support team at ${fallbackEmail}` });
    }
  } catch (error) {
    console.error('API error:', error);
    res.status(500).json({ error: error.message });
  }
};

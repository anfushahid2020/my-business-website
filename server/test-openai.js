const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const OpenAI = require('openai');

async function main(){
  const key = process.env.OPENAI_API_KEY;
  console.log('OPENAI_API_KEY present?', !!key);
  if(!key){
    console.error('No key found in process.env');
    process.exit(1);
  }
  const client = new OpenAI({ apiKey: key });
  try{
    const resp = await client.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'Say hello in one sentence.' }],
      max_tokens: 50
    });
    console.log('OpenAI success, reply:', resp.choices?.[0]?.message?.content || '<no content>');
  }catch(err){
    console.error('OpenAI call failed:', err && err.message ? err.message : err);
    if(err && err.response) console.error('Response data:', err.response.data || err.response);
    process.exit(1);
  }
}

main();

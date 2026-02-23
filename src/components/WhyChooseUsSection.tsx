
const differentiators = [
  {
    icon: '💡',
    title: 'Passion for Education',
    desc: 'We are deeply passionate about empowering learners and educators with meaningful, innovative educational services.'
  },
  {
    icon: '🌐',
    title: 'Great Online Presence',
    desc: 'A trusted, professional platform with a strong digital presence and active community engagement.'
  },
  {
    icon: '🤖',
    title: 'AI Chatbot & Tutor',
    desc: 'Smart AI chatbot and tutor, specialized and connected to real data for instant, personalized support.'
  },
  {
    icon: '🎨',
    title: 'A1 UI/UX',
    desc: 'World-class, modern, and accessible design for a delightful, intuitive learning experience.'
  },
  {
    icon: '⏰',
    title: 'Timely Delivery',
    desc: 'Fast, reliable platform and support—always on time for your educational needs.'
  },
  {
    icon: '🛠️',
    title: 'Special Educational Tools',
    desc: 'Exclusive tools: paper making, progress bars, student timetables, and more to boost productivity and engagement.'
  },
];

export default function WhyChooseUsSection() {
  return (
    <section style={{ background: '#0d0d0d', padding: '4rem 0' }}>
      <div className="container">
        <h2 style={{ fontSize: '2rem', color: '#D4AF37', fontWeight: 700, textAlign: 'center', marginBottom: 40, letterSpacing: '0.02em' }}>Why Choose Us?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
          {differentiators.map((d, i) => (
            <div key={i} style={{ borderRadius: 16, background: '#1a1a1a', boxShadow: '0 4px 24px rgba(212, 175, 55, 0.08)', padding: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', border: '1px solid #D4AF37' }}>
              <div style={{ fontSize: 32, marginBottom: 16, color: '#D4AF37' }} aria-hidden>{d.icon}</div>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: '#D4AF37', marginBottom: 8 }}>{d.title}</h3>
              <p style={{ color: '#D4AF37' }}>{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

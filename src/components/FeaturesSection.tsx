
const features = [
  {
    title: 'AI-Powered Learning',
    icon: '🤖',
    desc: 'Personalized, adaptive content and recommendations powered by advanced AI.'
  },
  {
    title: 'Progress Tracking',
    icon: '📈',
    desc: 'Visualize your learning journey and stay motivated with real-time stats.'
  },
  {
    title: 'Personalized Paths',
    icon: '🧭',
    desc: 'Custom learning paths tailored to your goals, pace, and interests.'
  },
  {
    title: 'Institution Tools',
    icon: '🏫',
    desc: 'Robust dashboards and analytics for schools, colleges, and organizations.'
  },
  {
    title: 'Mobile Friendly',
    icon: '📱',
    desc: 'Seamless experience on any device, anywhere, anytime.'
  },
  {
    title: 'Secure Platform',
    icon: '🔒',
    desc: 'Enterprise-grade security and privacy for all users.'
  },
];

export default function FeaturesSection() {
  return (
    <section style={{ background: '#0d0d0d', padding: '4rem 0' }}>
      <div className="container">
        <h2 style={{ fontSize: '2rem', color: '#D4AF37', fontWeight: 700, textAlign: 'center', marginBottom: 40, letterSpacing: '0.02em' }}>Platform Features</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 32 }}>
          {features.map((f, i) => (
            <div key={i} style={{ borderRadius: 16, background: '#1a1a1a', boxShadow: '0 4px 24px rgba(212, 175, 55, 0.08)', padding: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', border: '1px solid #D4AF37' }}>
              <div style={{ fontSize: 32, marginBottom: 16, color: '#D4AF37' }} aria-hidden>{f.icon}</div>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: '#D4AF37', marginBottom: 8 }}>{f.title}</h3>
              <p style={{ color: '#D4AF37' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

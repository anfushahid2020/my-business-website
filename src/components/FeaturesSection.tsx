
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
    <section style={{ background: '#fff', padding: '4rem 0' }}>
      <div className="container">
        <h2 style={{ fontSize: '2rem', color: '#E5B80B', fontWeight: 700, textAlign: 'center', marginBottom: 40, letterSpacing: '0.02em' }}>Platform Features</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 32 }}>
          {features.map((f, i) => (
            <div key={i} style={{ borderRadius: 16, background: '#fff', boxShadow: '0 4px 24px rgba(229, 184, 11, 0.08)', padding: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', border: '1px solid #E5B80B' }}>
              <div style={{ fontSize: 32, marginBottom: 16, color: '#E5B80B' }} aria-hidden>{f.icon}</div>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: '#E5B80B', marginBottom: 8 }}>{f.title}</h3>
              <p style={{ color: '#b3860b' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


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
    <section className="py-12">
      <div className="container">
        <h2 className="text-2xl md:text-3xl text-primary font-bold text-center mb-10">Platform Features</h2>
        <div className="grid-responsive">
          {features.map((f, i) => (
            <div key={i} className="card text-center p-6">
              <div className="text-3xl mb-4 text-primary" aria-hidden>{f.icon}</div>
              <h3 className="text-lg font-semibold text-primary mb-2">{f.title}</h3>
              <p className="text-deep-gray">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


const plans = [
  {
    name: 'Basic',
    price: 0,
    period: 'mo',
    features: [
      'Access to free courses',
      'Progress tracking',
      'Mobile friendly',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Pro',
    price: 29,
    period: 'mo',
    features: [
      'All Basic features',
      'AI-powered tutor & chatbot',
      'Personalized learning paths',
      'Certificates',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 99,
    period: 'mo',
    features: [
      'All Pro features',
      'Institution dashboard',
      'Bulk enrollments',
      'Advanced analytics',
      'Dedicated manager',
    ],
    cta: 'Contact Sales',
    highlight: false,
  },
];

export default function PricingPreview() {
  return (
    <section style={{ background: '#0d0d0d', padding: '4rem 0' }}>
      <div className="container">
        <h2 style={{ fontSize: '2rem', color: '#D4AF37', fontWeight: 700, textAlign: 'center', marginBottom: 40, letterSpacing: '0.02em' }}>Pricing Plans</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 32 }}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                borderRadius: 16,
                border: plan.highlight ? '2px solid #D4AF37' : '1px solid #D4AF37',
                background: plan.highlight ? '#D4AF37' : '#1a1a1a',
                color: plan.highlight ? '#000000' : '#D4AF37',
                boxShadow: '0 4px 24px rgba(212, 175, 55, 0.08)',
                padding: 32,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transform: plan.highlight ? 'scale(1.05)' : 'none',
                zIndex: plan.highlight ? 10 : 1,
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1, color: plan.highlight ? '#000000' : '#D4AF37' }}>{plan.name}</div>
              <div style={{ fontSize: 32, fontWeight: 800, marginBottom: 16, color: plan.highlight ? '#000000' : '#D4AF37' }}>
                {plan.price === 0 ? 'Free' : `$${plan.price}`}
                <span style={{ fontSize: 16, fontWeight: 500, marginLeft: 4, color: plan.highlight ? '#000000' : '#D4AF37' }}>/ {plan.period}</span>
              </div>
              <ul style={{ marginBottom: 24, textAlign: 'left', width: '100%', maxWidth: 240, marginInline: 'auto', padding: 0, listStyle: 'none' }}>
                {plan.features.map((f, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: 4, background: plan.highlight ? '#000000' : '#D4AF37' }} />
                    <span style={{ color: plan.highlight ? '#000000' : '#D4AF37' }}>{f}</span>
                  </li>
                ))}
              </ul>
              <button className="btn" style={{ marginTop: 'auto', width: '100%', background: plan.highlight ? '#000000' : '#D4AF37', color: plan.highlight ? '#D4AF37' : '#000000', fontWeight: 700 }}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

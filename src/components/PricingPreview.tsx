
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
    <section className="py-12">
      <div className="container">
        <h2 className="text-2xl md:text-3xl text-primary font-bold text-center mb-10">Pricing Plans</h2>
        <div className="grid-responsive">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`card flex flex-col items-center p-6 ${plan.highlight ? 'border-2' : ''}`}
              style={{ transform: plan.highlight ? 'scale(1.03)' : 'none', zIndex: plan.highlight ? 10 : 1 }}
            >
              <div className="uppercase tracking-wide text-sm font-bold mb-2 text-primary">{plan.name}</div>
              <div className="text-2xl font-extrabold mb-4 text-primary">
                {plan.price === 0 ? 'Free' : `$${plan.price}`}
                <span className="text-base font-medium text-deep-gray">/ {plan.period}</span>
              </div>
              <ul className="mb-6 text-left w-full max-w-xs mx-auto list-none p-0">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 mb-2">
                    <span className={`inline-block w-2 h-2 rounded-full ${plan.highlight ? 'bg-primary' : 'bg-primary'}`} />
                    <span className="text-deep-gray">{f}</span>
                  </li>
                ))}
              </ul>
              <button className="btn w-full" style={{ marginTop: 'auto' }}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

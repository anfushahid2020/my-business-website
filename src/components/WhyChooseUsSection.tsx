
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
    <section className="py-12">
      <div className="container">
        <h2 className="text-2xl md:text-3xl text-primary font-bold text-center mb-10">Why Choose Us?</h2>
        <div className="grid-responsive">
          {differentiators.map((d, i) => (
            <div key={i} className="card text-center p-6">
              <div className="text-3xl mb-3 text-primary" aria-hidden>{d.icon}</div>
              <h3 className="text-lg font-semibold text-primary mb-2">{d.title}</h3>
              <p className="text-deep-gray">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

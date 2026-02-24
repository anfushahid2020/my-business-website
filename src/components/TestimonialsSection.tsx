
const testimonials = [
  {
    name: 'Open University',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Commons-logo.svg', // Public domain placeholder
    quote: 'These digital tools have made a real difference in our teaching and student outcomes. Highly recommended for any institution.',
    title: 'Principal: Dr. Alex Morgan',
    principalPhoto: 'https://randomuser.me/api/portraits/men/32.jpg', // Random user placeholder
  },
  {
    name: 'Bright Future School',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg', // Public domain placeholder
    quote: 'Quiz tests and self-management apps made our teachers’ lives easier and our students more organized.',
    title: 'Principal, Bright Future School',
  },
  {
    name: 'City College',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', // Public domain placeholder
    quote: 'The online timetable and chatbot support helped us deliver a seamless digital experience to our students.',
    title: 'Director, City College',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-2xl md:text-3xl text-primary font-bold text-center mb-10">Institution Success Stories</h2>
        <div className="grid-responsive">
          {testimonials.map((t, i) => (
            <div key={i} className="card flex flex-col items-center text-center p-6 min-h-[220px]">
              <div className="flex flex-col items-center mb-4">
                <img src={t.avatar} alt={t.name} className="institution-avatar rounded-full mb-2 img-responsive" />
                {t.principalPhoto && (
                  <img src={t.principalPhoto} alt={t.title} className="principal-photo rounded-full mb-2 img-responsive" />
                )}
              </div>
              <blockquote className="italic text-deep-gray mb-4">“{t.quote}”</blockquote>
              <div className="font-semibold text-primary mb-1">{t.name}</div>
              <div className="text-sm text-deep-gray">{t.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

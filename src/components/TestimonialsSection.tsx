
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
    <section style={{ background: '#0d0d0d', padding: '4rem 0' }}>
      <div className="container">
        <h2 style={{ fontSize: '2rem', color: '#D4AF37', fontWeight: 700, textAlign: 'center', marginBottom: 40, letterSpacing: '0.02em' }}>Institution Success Stories</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ borderRadius: 16, background: '#1a1a1a', boxShadow: '0 4px 24px rgba(212, 175, 55, 0.08)', padding: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', border: '1px solid #D4AF37', minHeight: 370, justifyContent: 'flex-start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 16 }}>
                <img src={t.avatar} alt={t.name} style={{ width: 64, height: 64, borderRadius: '50%', marginBottom: t.principalPhoto ? 8 : 16, objectFit: 'cover', border: '4px solid #7C3AED22', background: '#0d0d0d' }} />
                {t.principalPhoto && (
                  <img src={t.principalPhoto} alt={t.title} style={{ width: 48, height: 48, borderRadius: '50%', marginBottom: 8, objectFit: 'cover', border: '2px solid #7C3AED22', background: '#0d0d0d' }} />
                )}
              </div>
              <blockquote style={{ color: '#D4AF37', fontStyle: 'italic', marginBottom: 16, minHeight: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>“{t.quote}”</blockquote>
              <div style={{ fontWeight: 600, color: '#D4AF37', marginBottom: 2 }}>{t.name}</div>
              <div style={{ fontSize: 14, color: '#2d2d2d' }}>{t.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

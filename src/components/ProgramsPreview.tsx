
const programs = [
  { title: 'AI Essentials', level: 'Beginner', duration: '4 weeks' },
  { title: 'Data Science Bootcamp', level: 'Intermediate', duration: '8 weeks' },
  { title: 'Modern Web Development', level: 'All Levels', duration: '6 weeks' },
  { title: 'Business Analytics', level: 'Advanced', duration: '5 weeks' },
];

export default function ProgramsPreview() {
  return (
    <section style={{ background: '#0d0d0d', padding: '4rem 0' }}>
      <div className="container">
        <h2 style={{ color: '#D4AF37', fontSize: 28, fontWeight: 700, marginBottom: 16 }}>Featured Programs</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
          {programs.map((p) => (
            <div key={p.title} style={{ background: '#0b0b0b', padding: 16, borderRadius: 12, border: '1px solid #2d2d2d' }}>
              <h3 style={{ color: '#D4AF37', marginBottom: 8 }}>{p.title}</h3>
              <div style={{ color: '#D4AF37', fontSize: 14 }}>{p.level} • {p.duration}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

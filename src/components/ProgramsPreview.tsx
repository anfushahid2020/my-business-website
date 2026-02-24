
const programs = [
  { title: 'AI Essentials', level: 'Beginner', duration: '4 weeks' },
  { title: 'Data Science Bootcamp', level: 'Intermediate', duration: '8 weeks' },
  { title: 'Modern Web Development', level: 'All Levels', duration: '6 weeks' },
  { title: 'Business Analytics', level: 'Advanced', duration: '5 weeks' },
];

export default function ProgramsPreview() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-2xl md:text-3xl text-primary font-bold mb-6">Featured Programs</h2>
        <div className="grid-responsive">
          {programs.map((p) => (
            <div key={p.title} className="card p-4">
              <h3 className="text-primary font-semibold mb-2">{p.title}</h3>
              <div className="text-deep-gray text-sm">{p.level} • {p.duration}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

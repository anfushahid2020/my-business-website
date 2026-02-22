
export default function HeroSection() {
  return (
    <section style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 40, padding: '4rem 0' }}>
      <div style={{ flex: 1, zIndex: 1, minWidth: 320 }}>
        <h1 style={{ fontSize: '2.5rem', color: '#E5B80B', fontWeight: 700, marginBottom: 24, lineHeight: 1.1 }}>
           The Ultimate Digital Solution for Educational Institutes
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#b3860b', marginBottom: 32, maxWidth: 480 }}>
          We help educational institutes grow their business and deliver exceptional online education. Get the best UI/UX, interactive quiz tests, smart chatbots, and everything you need to engage students and succeed in the digital era.
        </p>
        {/* Watch Demo button and credit card info removed as requested */}
      </div>
      {/* Removed dashboard mockup for a cleaner hero section */}
    </section>
  );
}

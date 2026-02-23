
export default function TrustStrip() {
  return (
    <section style={{ background: '#0d0d0d', borderTop: '1px solid #2d2d2d', borderBottom: '1px solid #2d2d2d', padding: '2rem 0' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <div style={{ fontSize: 18, fontWeight: 600, color: '#D4AF37', marginBottom: 12 }}>
          Trusted by <span style={{ color: '#D4AF37', fontWeight: 700 }}>10+</span> educational institutes
        </div>
        {/* Logos removed as requested */}
        <div></div>
      </div>
    </section>
  );
}

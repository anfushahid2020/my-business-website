
export default function TrustStrip() {
  return (
    <section style={{ background: '#F5F3FF', borderTop: '1px solid #eee', borderBottom: '1px solid #eee', padding: '2rem 0' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <div style={{ fontSize: 18, fontWeight: 600, color: '#E5B80B', marginBottom: 12 }}>
          Trusted by <span style={{ color: '#E5B80B', fontWeight: 700 }}>10+</span> educational institutes
        </div>
        {/* Logos removed as requested */}
        <div></div>
      </div>
    </section>
  );
}

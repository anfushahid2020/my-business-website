import { Link } from 'react-router-dom';

// Gold color: #D4AF37 (brand gold)
const Logo = () => (
  <Link to="/" style={{ display: 'inline-block' }}>
    <img
      src="/logo.png"
      alt="Business Logo"
      style={{
        width: '72px',
        height: '72px',
        filter: 'drop-shadow(0 2px 8px rgba(212, 175, 55, 0.25))',
        zIndex: 2,
        background: 'transparent',
        borderRadius: '12px',
        display: 'block',
        margin: '0 auto',
        transition: 'transform 0.15s',
      }}
    />
  </Link>
);

export default Logo;

import { Link } from 'react-router-dom';

// Gold color: #D4AF37 (brand gold)
const Logo = () => (
  <Link to="/" style={{ display: 'inline-block' }}>
    <img
      src="/logo.png"
      alt="Business Logo"
      style={{
        width: '40px',
        height: '40px',
        zIndex: 2,
        background: 'transparent',
        borderRadius: '8px',
        display: 'block',
        margin: '0',
        transition: 'transform 0.15s',
      }}
    />
  </Link>
);

export default Logo;

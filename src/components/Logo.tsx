import { Link } from 'react-router-dom';

// Gold color: #D4AF37 (brand gold)
const Logo = () => (
  <Link to="/" className="inline-block">
    <img
      src="/logo.png"
      alt="Business Logo"
      className="site-logo rounded-md bg-transparent"
      style={{ transition: 'transform 0.15s' }}
    />
  </Link>
);

export default Logo;

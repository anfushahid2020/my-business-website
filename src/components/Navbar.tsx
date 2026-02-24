import { Link } from 'react-router-dom';
import Logo from './Logo';

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/resources', label: 'Resources' },
    { to: '/login', label: 'Login' },
];

export default function Navbar() {
  return (
    <header style={{ position: 'sticky', top: 0, width: '100%', background: '#003366', boxShadow: '0 6px 18px rgba(0,0,0,0.12)', zIndex: 30 }}>
      <div style={{ maxWidth: 1190, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.6rem 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Logo />
          </Link>
        </div>
        <nav style={{ display: 'flex', gap: 22, fontSize: 18, fontWeight: 600, fontFamily: 'Inter, Arial, sans-serif' }}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                color: '#FFFFFF',
                textDecoration: 'none',
                fontFamily: 'Inter, Arial, sans-serif',
                fontSize: 16,
                padding: '0.35em 0.75em',
                borderRadius: '6px',
                transition: 'background 0.15s, color 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#1a5f99')}
              onMouseLeave={e => (e.currentTarget.style.color = '#FFFFFF')}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/resources', label: 'Resources' },
    { to: '/login', label: 'Login' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  return (
    <header style={{ position: 'sticky', top: 0, width: '100%', background: '#fff', borderBottom: '1px solid #E5B80B', boxShadow: '0 2px 8px rgba(229,184,11,0.08)', zIndex: 30 }}>
      <div style={{ maxWidth: 1190, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Logo />
          </Link>
        </div>
        <nav style={{ display: 'flex', gap: 32, fontSize: 22, fontWeight: 500, fontFamily: 'Inter, Arial, sans-serif' }}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                color: '#E5B80B',
                textDecoration: 'none',
                fontFamily: 'Inter, Arial, sans-serif',
                fontSize: 22,
                padding: '0.5em 1em',
                borderRadius: '6px',
                transition: 'background 0.2s, color 0.2s',
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

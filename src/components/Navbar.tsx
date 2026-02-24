import { Link } from 'react-router-dom';
import Logo from './Logo';
import { useState } from 'react';

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/resources', label: 'Resources' },
    { to: '/login', label: 'Login' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 w-full z-30">
      <div className="site-header-inner max-w-6xl mx-auto flex items-center justify-between p-3 md:p-4">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center brand-link">
            <Logo />
            <span className="site-title ml-2 text-white font-semibold">WebDemics</span>
          </Link>
        </div>

        {/* Desktop nav (uses fallback CSS if Tailwind isn't available) */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="nav-link"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <div className="mobile-toggle-button">
          <button aria-label="Toggle menu" onClick={() => setOpen(v => !v)} className="p-2 text-white">
            <svg className="mobile-ham" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {/* Mobile menu panel (renders only when open) */}
      {open && (
        <div className={`mobile-panel ${open ? 'open' : ''}`}>
          <nav className="mobile-panel-nav">
            {navLinks.map(link => (
              <Link key={link.to} to={link.to} className="mobile-nav-link" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

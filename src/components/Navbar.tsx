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
    <header className="sticky top-0 w-full bg-primary shadow-lg z-30">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-3 md:p-4">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-white font-semibold text-sm">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="text-white hover:text-primary-light px-2 py-1 rounded"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button aria-label="Toggle menu" onClick={() => setOpen(v => !v)} className="p-2 text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden bg-primary px-4 pb-4">
          <nav className="flex flex-col gap-2">
            {navLinks.map(link => (
              <Link key={link.to} to={link.to} className="block text-white py-2 px-3 rounded hover:text-primary-light" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

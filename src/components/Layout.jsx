import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');
  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="layout">
      {/* NAVBAR */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="container nav-container">
          <a href="#" className="logo" aria-label="Home">MB</a>

          <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`} onClick={closeMenu}>
            {navLinks.map(l => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
            <a href="/assets/Mustafa_Bozkaya_CV.pdf" download className="nav-resume-mobile">
              <FiFileText /> Resume
            </a>
          </div>

          <div className="nav-actions">
            <a href="/assets/Mustafa_Bozkaya_CV.pdf" download className="resume-cta">
              <FiFileText style={{ marginRight: 6 }} /> Resume
            </a>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
            <button className="mobile-toggle" onClick={() => setMobileMenuOpen(o => !o)} aria-label="Menu">
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      {/* FOOTER */}
      <footer className="footer" role="contentinfo">
        <div className="container footer-content">
          <p>&copy; {new Date().getFullYear()} Mustafa Bozkaya — AI Engineer & MLOps Engineer</p>
          <div className="social-links">
            <a href="https://github.com/mustafabozkaya" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://linkedin.com/in/mustafa-bozkaya" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>
      </footer>

      <style>{`
        .navbar {
          position: fixed; top: 0; left: 0; right: 0;
          height: 72px; z-index: 1000;
          display: flex; align-items: center;
          background: rgba(250,251,252,0.82);
          backdrop-filter: blur(16px) saturate(1.4);
          -webkit-backdrop-filter: blur(16px) saturate(1.4);
          border-bottom: 1px solid var(--glass-border);
          transition: all var(--transition-normal);
        }
        .navbar.scrolled {
          box-shadow: var(--glass-shadow);
          height: 68px;
        }
        .nav-container {
          display: flex; justify-content: space-between; align-items: center; width: 100%;
        }
        .logo {
          font-family: var(--font-display);
          font-size: 1.5rem; font-weight: 800;
          background: var(--accent-gradient);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        .nav-links {
          display: flex; gap: var(--spacing-md);
        }
        .nav-links a {
          font-weight: 500; font-size: 0.9375rem;
          color: var(--text-secondary);
          position: relative; padding: 4px 0;
          transition: color var(--transition-fast);
        }
        .nav-links a:hover { color: var(--text-primary); }
        .nav-links a::after {
          content: ''; position: absolute;
          width: 0; height: 2px; bottom: -2px; left: 0;
          background: var(--accent-gradient);
          transition: width var(--transition-fast);
        }
        .nav-links a:hover::after { width: 100%; }
        .nav-actions {
          display: flex; align-items: center; gap: var(--spacing-sm);
        }
        .resume-cta {
          display: flex; align-items: center;
          padding: 8px 18px;
          background: var(--text-primary);
          color: var(--bg-primary) !important;
          border-radius: 10px; font-weight: 600; font-size: 0.875rem;
          transition: all var(--transition-normal);
        }
        .resume-cta:hover {
          transform: translateY(-2px);
          box-shadow: var(--card-shadow);
          background: var(--accent-primary);
          color: #fff !important;
        }
        .theme-toggle {
          display: flex; align-items: center; justify-content: center;
          width: 40px; height: 40px; border-radius: 10px;
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          transition: all var(--transition-normal);
        }
        .theme-toggle:hover {
          color: var(--accent-primary);
          transform: rotate(15deg);
        }
        .mobile-toggle { display: none; color: var(--text-primary); font-size: 1.5rem; }
        .nav-resume-mobile { display: none; }

        .footer {
          background: var(--bg-secondary);
          padding: var(--spacing-md) 0;
          border-top: 1px solid var(--glass-border);
        }
        .footer-content {
          display: flex; justify-content: space-between; align-items: center;
        }
        .footer p { font-size: 0.875rem; color: var(--text-secondary); }
        .social-links { display: flex; gap: 16px; }
        .social-links a {
          font-size: 1.5rem; color: var(--text-secondary);
          transition: all var(--transition-fast);
        }
        .social-links a:hover { color: var(--accent-primary); transform: translateY(-2px); }

        @media (max-width: 768px) {
          .nav-links {
            position: fixed; top: 68px; left: 0; right: 0;
            background: var(--bg-secondary);
            flex-direction: column; align-items: center;
            padding: var(--spacing-md);
            transform: translateY(-150%);
            transition: transform var(--transition-normal);
            border-bottom: 1px solid var(--glass-border);
            box-shadow: var(--glass-shadow);
          }
          .nav-links.open { transform: translateY(0); }
          .mobile-toggle { display: block; }
          .nav-resume-mobile { display: flex; align-items: center; gap: 8px; color: var(--accent-primary) !important; font-weight: 700; }
          .resume-cta { display: none; }
          .footer-content { flex-direction: column; gap: var(--spacing-sm); text-align: center; }
        }
      `}</style>
    </div>
  );
};

export default Layout;

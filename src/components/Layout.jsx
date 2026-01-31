import React, { useState, useEffect } from 'react';
import '../styles/global.css';
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaSun, FaMoon, FaFileAlt } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div className="layout">
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="logo">M.Bozkaya</a>

          <div className="nav-actions">
            <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
              <a href="#hero" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <a
                href="/assets/Mustafa_Bozkaya_CV.pdf"
                download="Mustafa_Bozkaya_CV.pdf"
                className="nav-resume-mobile"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FiFileText /> Resume
              </a>
            </div>

            <div className="nav-desktop-actions">
              <a
                href="/assets/Mustafa_Bozkaya_CV.pdf"
                download="Mustafa_Bozkaya_CV.pdf"
                className="resume-cta"
              >
                <FiFileText style={{ marginRight: '6px' }} /> Resume
              </a>
              <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
              </button>
            </div>

            <button className="mobile-toggle" onClick={toggleMenu}>
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="footer">
        <div className="container footer-content">
          <p>&copy; {new Date().getFullYear()} Mustafa Bozkaya. All rights reserved.</p>
          <div className="social-links">
            <a href="https://github.com/mustafabozkaya" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/mustafa-bozkaya" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </footer>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          display: flex;
          align-items: center;
          z-index: 1000;
          transition: var(--transition-normal), background 0.3s;
        }
        
        .navbar.scrolled {
          background: var(--glass-bg);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--glass-border);
          box-shadow: var(--glass-shadow);
          height: 70px;
        }
        
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
        }
        
        .nav-links {
          display: flex;
          gap: var(--spacing-md);
        }
        
        .nav-links a {
          font-weight: 500;
          position: relative;
          color: var(--text-primary);
        }
        
        .nav-links a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background: var(--accent-gradient);
          transition: width var(--transition-fast);
        }
        
        .nav-links a:hover::after {
          width: 100%;
        }

        .theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-tertiary);
          color: var(--accent-primary);
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
        }

        .theme-toggle:hover {
          transform: rotate(30deg) scale(1.1);
        }

        .nav-desktop-actions {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
        }

        .resume-cta {
          display: flex;
          align-items: center;
          padding: 8px 16px;
          background: var(--accent-gradient);
          color: white !important;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.9rem;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 10px rgba(56, 189, 248, 0.3);
        }

        .resume-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(56, 189, 248, 0.5);
        }

        .nav-resume-mobile {
          display: none;
          align-items: center;
          gap: 8px;
          margin-top: var(--spacing-sm);
          color: var(--accent-primary) !important;
          font-weight: 700;
        }
        
        .mobile-toggle {
          display: none;
          color: var(--text-primary);
          font-size: 1.5rem;
        }
        
        .footer {
          background: var(--bg-secondary);
          padding: var(--spacing-md) 0;
          margin-top: var(--spacing-lg);
          border-top: 1px solid var(--glass-border);
        }
        
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .social-links {
          display: flex;
          gap: var(--spacing-sm);
        }
        
        .social-links a {
          font-size: 1.5rem;
          color: var(--text-secondary);
        }
        
        .social-links a:hover {
          color: var(--accent-primary);
          transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: var(--bg-secondary);
            flex-direction: column;
            align-items: center;
            padding: var(--spacing-md);
            transform: translateY(-150%);
            transition: transform var(--transition-normal);
            border-bottom: 1px solid var(--glass-border);
            box-shadow: var(--glass-shadow);
          }
          
          .nav-links.active {
            transform: translateY(0);
          }
          
          .mobile-toggle {
            display: block;
          }

          .nav-resume-mobile {
            display: flex;
          }

          .resume-cta {
            display: none;
          }
          
          .footer-content {
            flex-direction: column;
            gap: var(--spacing-sm);
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;

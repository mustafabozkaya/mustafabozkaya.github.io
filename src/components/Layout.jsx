import React, { useState, useEffect } from 'react';
import '../styles/global.css';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const Layout = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    return (
        <div className="layout">
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container nav-container">
                    <a href="#" className="logo">M.Bozkaya</a>

                    <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                        <a href="#hero" onClick={() => setMobileMenuOpen(false)}>Home</a>
                        <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
                        <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
                        <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                    </div>

                    <button className="mobile-toggle" onClick={toggleMenu}>
                        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
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
          transition: var(--transition-normal);
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
        
        .nav-links {
          display: flex;
          gap: var(--spacing-md);
        }
        
        .nav-links a {
          font-weight: 500;
          position: relative;
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
            top: 70px; /* Height of scrolled navbar */
            left: 0;
            right: 0;
            background: var(--bg-secondary);
            flex-direction: column;
            align-items: center;
            padding: var(--spacing-md);
            transform: translateY(-150%);
            transition: transform var(--transition-normal);
            border-bottom: 1px solid var(--glass-border);
          }
          
          .nav-links.active {
            transform: translateY(0);
          }
          
          .mobile-toggle {
            display: block;
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

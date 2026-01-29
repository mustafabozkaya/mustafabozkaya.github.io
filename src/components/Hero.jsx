import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="greeting">Hello, I'm</h2>
                    <h1 className="name">Mustafa Bozkaya</h1>
                    <h3 className="title">Full Stack Developer & AI R&D Engineer</h3>
                    <p className="subtitle">
                        Crafting intelligent web solutions and pushing the boundaries of AI.
                        Passionate about Deep Learning, React, and building scalable systems.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">View My Work</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                </motion.div>
            </div>

            <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px; /* Navbar height */
          background: radial-gradient(circle at top right, rgba(56, 189, 248, 0.1), transparent 40%),
                      radial-gradient(circle at bottom left, rgba(129, 140, 248, 0.1), transparent 40%);
        }
        
        .hero-content {
          max-width: 800px;
        }
        
        .greeting {
          color: var(--accent-primary);
          font-family: var(--font-code);
          font-size: 1.2rem;
          margin-bottom: var(--spacing-xs);
        }
        
        .name {
          font-size: 4rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.1;
          margin-bottom: var(--spacing-sm);
        }
        
        .title {
          font-size: 2rem;
          color: var(--text-secondary);
          margin-bottom: var(--spacing-md);
        }
        
        .subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin-bottom: var(--spacing-lg);
        }
        
        .hero-actions {
          display: flex;
          gap: var(--spacing-sm);
        }
        
        .btn {
          padding: 0.8rem 2rem;
          border-radius: 4px;
          font-weight: 600;
          transition: all var(--transition-normal);
          text-transform: uppercase;
          font-size: 0.9rem;
          letter-spacing: 1px;
        }
        
        .btn-primary {
          background: var(--accent-gradient);
          color: white;
          border: 1px solid transparent;
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: var(--glass-shadow);
        }
        
        .btn-outline {
          border: 1px solid var(--accent-primary);
          color: var(--accent-primary);
        }
        
        .btn-outline:hover {
          background: rgba(56, 189, 248, 0.1);
        }
        
        @media (max-width: 768px) {
          .name { font-size: 3rem; }
          .title { font-size: 1.5rem; }
          .hero-actions { flex-direction: column; }
          .btn { width: 100%; text-align: center; }
        }
      `}</style>
        </section>
    );
};

export default Hero;

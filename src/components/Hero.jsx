import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="hero" className="hero-section">
      {/* Ambient Motion Background */}
      <div className="bg-ambient">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      <div className="container hero-content">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={itemVariants} className="greeting">
            Hello, I'm
          </motion.h2>
          <motion.h1 variants={itemVariants} className="name">
            Mustafa Bozkaya
          </motion.h1>
          <motion.h3 variants={itemVariants} className="title">
            Senior Machine Learning Engineer <span className="separator">|</span> AI Systems Architect
          </motion.h3>
          <motion.p variants={itemVariants} className="subtitle">
            Bridging the gap between cutting-edge AI research and scalable production systems.
            Specializing in **Multi-Agent Architectures**, **VLA Models**, and **Production MLOps**.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-actions">
            <a href="#projects" className="btn btn-primary">Discover Projects</a>
            <a href="#about" className="btn btn-outline">Technical Background</a>
          </motion.div>

          <motion.div variants={itemVariants} className="terminal-preview">
            <div className="terminal-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="terminal-title">mustafa_bozkaya — ai_status</span>
            </div>
            <div className="terminal-body">
              <p><span className="prompt">❯</span> system.status <span className="value">"active"</span></p>
              <p><span className="prompt">❯</span> current.focus <span className="value">["Agentic RAG", "LLM Serving", "ROS2"]</span></p>
              <p><span className="prompt">❯</span> expertise.level <span className="value">"Senior"</span></p>
              <p><span className="prompt">❯</span> <span className="cursor">_</span></p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px;
          position: relative;
          overflow: hidden;
          background: var(--bg-primary);
        }

        /* Ambient Particles */
        .bg-ambient {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--accent-primary);
          border-radius: 50%;
          opacity: 0.15;
          filter: blur(1px);
          animation: float 20s infinite linear;
        }

        ${[...Array(20)].map((_, i) => `
          .particle:nth-child(${i + 1}) {
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * -20}s;
            animation-duration: ${15 + Math.random() * 10}s;
            transform: scale(${0.5 + Math.random()});
          }
        `).join('')}

        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-40px) translateX(0); }
          75% { transform: translateY(-20px) translateX(-10px); }
          100% { transform: translateY(0) translateX(0); }
        }
        
        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 900px;
        }
        
        .greeting {
          color: var(--accent-primary);
          font-family: var(--font-code);
          font-size: 1.2rem;
          margin-bottom: var(--spacing-xs);
        }
        
        .name {
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.1;
          margin-bottom: var(--spacing-sm);
          letter-spacing: -1px;
        }
        
        .title {
          font-size: clamp(1.2rem, 4vw, 2rem);
          color: var(--text-secondary);
          margin-bottom: var(--spacing-md);
          font-weight: 500;
        }

        .separator {
          color: var(--accent-primary);
          opacity: 0.5;
          margin: 0 10px;
        }
        
        .subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 700px;
          margin-bottom: var(--spacing-lg);
          line-height: 1.7;
        }

        .subtitle b, .subtitle strong {
          color: var(--text-primary);
        }
        
        .hero-actions {
          display: flex;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-lg);
        }
        
        .btn {
          padding: 1rem 2.5rem;
          border-radius: 8px;
          font-weight: 700;
          transition: all var(--transition-normal);
          text-transform: uppercase;
          font-size: 0.85rem;
          letter-spacing: 1.5px;
          display: inline-flex;
          align-items: center;
        }
        
        .btn-primary {
          background: var(--accent-gradient);
          color: white;
          box-shadow: 0 4px 15px rgba(56, 189, 248, 0.4);
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(56, 189, 248, 0.6);
        }
        
        .btn-outline {
          border: 2px solid var(--accent-primary);
          color: var(--accent-primary);
        }
        
        .btn-outline:hover {
          background: var(--accent-primary);
          color: white;
          transform: translateY(-3px);
        }

        /* Terminal Micro-component */
        .terminal-preview {
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          box-shadow: var(--glass-shadow);
          max-width: 500px;
          overflow: hidden;
          font-family: var(--font-code);
          margin-top: calc(var(--spacing-lg) * 0.5);
        }

        .terminal-header {
          background: rgba(255, 255, 255, 0.05);
          padding: 8px 15px;
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .red { background: #ff5f56; }
        .yellow { background: #ffbd2e; }
        .green { background: #27c93f; }

        .terminal-title {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.4);
          margin-left: auto;
        }

        .terminal-body {
          padding: 20px;
          font-size: 0.9rem;
          color: #f8fafc;
        }

        .prompt { color: var(--accent-primary); margin-right: 10px; }
        .value { color: #818cf8; }
        .cursor {
          display: inline-block;
          width: 8px;
          height: 1.2rem;
          background: var(--accent-primary);
          margin-left: 5px;
          animation: blink 1s infinite;
          vertical-align: middle;
        }

        @keyframes blink {
          50% { opacity: 0; }
        }
        
        @media (max-width: 768px) {
          .hero-actions { flex-direction: column; width: 100%; }
          .btn { width: 100%; justify-content: center; }
          .terminal-preview { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Hero;

import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const canvasRef = useRef(null);

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
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let mouseX = 0, mouseY = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const getThemeColor = (lightVar, darkVar) => {
      const theme = document.documentElement.getAttribute('data-theme') || 'dark';
      return theme === 'light' ? lightVar : darkVar;
    };

    // Theme-aware colors
    const getColors = () => {
      const theme = document.documentElement.getAttribute('data-theme') || 'dark';
      if (theme === 'light') {
        return {
          particle: '99, 102, 241',   // indigo-500
          line: '99, 102, 241',
          lineOpacity: 0.08,
          particleOpacity: 0.3,
        };
      }
      return {
        particle: '56, 189, 248',    // sky-400
        line: '56, 189, 248',
        lineOpacity: 0.15,
        particleOpacity: 0.6,
      };
    };

    // Create particles
    const NUM_PARTICLES = 60;
    const particles = [];

    for (let i = 0; i < NUM_PARTICLES; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const colors = getColors();

      // Update and draw particles
      particles.forEach(p => {
        // Mouse influence
        p.x += p.vx + (mouseX - canvas.width / 2) * 0.0001;
        p.y += p.vy + (mouseY - canvas.height / 2) * 0.0001;

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${colors.particle}, ${colors.particleOpacity})`;
        ctx.fill();
      });

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${colors.line}, ${colors.lineOpacity * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    // Mouse tracking
    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Theme observer (re-draw on theme change)
    const observer = new MutationObserver(() => {
      // no need to reset, draw reads colors each frame
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="hero" className="hero-section">
      {/* Canvas Particle Background */}
      <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />

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
            Specializing in <strong>Multi-Agent Architectures</strong>, <strong>VLA Models</strong>, and <strong>Production MLOps</strong>.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-actions">
            <a href="#projects" className="btn btn-primary">Discover Projects</a>
            <a href="/AI-ML-DL-DS_Projects_Portfolio/" target="_blank" rel="noopener noreferrer" className="btn btn-portfolio">
              <FiExternalLink style={{ marginRight: '8px' }} /> Portfolio
            </a>
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

        .particle-canvas {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }

        @media (prefers-reduced-motion: reduce) {
          .particle-canvas {
            display: none;
          }
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
          font-family: var(--font-heading);
          color: var(--text-primary);
          line-height: 1.1;
          margin-bottom: var(--spacing-sm);
          letter-spacing: -2px;
        }

        .title {
          font-size: clamp(1.2rem, 4vw, 2rem);
          color: var(--text-secondary);
          margin-bottom: var(--spacing-md);
          font-weight: 500;
          font-family: var(--font-body);
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

        .subtitle strong {
          color: var(--text-primary);
        }

        .hero-actions {
          display: flex;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-lg);
        }

        .btn {
          padding: 1rem 2.5rem;
          border-radius: 12px;
          font-weight: 700;
          transition: all var(--transition-normal);
          text-transform: uppercase;
          font-size: 0.85rem;
          letter-spacing: 1.5px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-body);
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

        .btn-portfolio {
          background: rgba(129, 140, 248, 0.08);
          color: var(--accent-secondary);
          border: 1px solid rgba(129, 140, 248, 0.25);
          backdrop-filter: blur(12px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-portfolio:hover {
          background: rgba(129, 140, 248, 0.15);
          border-color: var(--accent-secondary);
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(129, 140, 248, 0.3);
        }

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

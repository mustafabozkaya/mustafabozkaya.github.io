import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  const canvasRef = useRef(null);

  // Lightweight particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    const particles = [];
    const NUM = 60;
    const DIST = 130;
    let mouseX = 0, mouseY = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < NUM; i++) {
        particles.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 2 + 0.8,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      const w = canvas.offsetWidth, h = canvas.offsetHeight;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx + (mouseX - w / 2) * 0.00008;
        p.y += p.vy + (mouseY - h / 2) * 0.00008;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(99, 102, 241, 0.25)';
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < DIST) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${(1 - dist / DIST) * 0.08})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };

    const onMouse = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    resize();
    init();
    draw();
    window.addEventListener('resize', () => { resize(); init(); });
    canvas.addEventListener('mousemove', onMouse);

    // Reduced motion: stop animation
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) cancelAnimationFrame(animId);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMouse);
    };
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="hero" className="hero-section" aria-label="Hero">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />

      {/* Ambient orbs */}
      <div className="hero-orbs" aria-hidden="true">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>

      <div className="container hero-content">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div variants={item} className="hero-badge">
            <span className="badge-dot" /> Available for work
          </motion.div>

          <motion.h1 variants={item} className="hero-title">
            <span className="line">AI Engineer &</span>
            <span className="line highlight">MLOps Engineer</span>
            <span className="line">Based in Turkey</span>
          </motion.h1>

          <motion.p variants={item} className="hero-desc">
            Building intelligent systems at the intersection of machine learning, cloud infrastructure, and generative AI.
            <strong> 27+ certifications.</strong> Production-grade solutions.
          </motion.p>

          <motion.div variants={item} className="hero-actions">
            <a href="#projects" className="btn btn-primary">View Projects <span className="btn-arrow">→</span></a>
            <a href="/assets/Mustafa_Bozkaya_CV.pdf" download className="btn btn-secondary">
              <FiDownload /> Download CV
            </a>
          </motion.div>

          <motion.div variants={item} className="hero-stats">
            <div className="stat"><span className="stat-num">29+</span><span className="stat-label">Projects</span></div>
            <div className="stat"><span className="stat-num">27+</span><span className="stat-label">Certifications</span></div>
            <div className="stat"><span className="stat-num">5+</span><span className="stat-label">Years Exp.</span></div>
          </motion.div>
        </motion.div>
      </div>

      <a href="#projects" className="scroll-indicator" aria-label="Scroll down">
        <FiArrowDown />
      </a>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          padding-top: 72px; position: relative; overflow: hidden;
          background: linear-gradient(160deg, #fafbfc 0%, #f0f2ff 40%, #fafbfc 100%);
        }
        .hero-canvas {
          position: absolute; inset: 0; z-index: 1; pointer-events: auto;
        }
        .hero-orbs { position: absolute; inset: 0; z-index: 0; pointer-events: none; overflow: hidden; }
        .hero-orb {
          position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.4;
          animation: orbFloat 20s ease-in-out infinite;
        }
        .hero-orb-1 { width: 500px; height: 500px; background: rgba(99,102,241,0.2); top: -150px; right: -100px; }
        .hero-orb-2 { width: 400px; height: 400px; background: rgba(139,92,246,0.15); bottom: -100px; left: -80px; animation-delay: -7s; }
        .hero-orb-3 { width: 350px; height: 350px; background: rgba(6,182,212,0.12); top: 50%; left: 50%; animation-delay: -14s; }
        @keyframes orbFloat {
          0%,100% { transform: translate(0,0) scale(1); }
          25% { transform: translate(30px,-40px) scale(1.05); }
          50% { transform: translate(-20px,20px) scale(0.95); }
          75% { transform: translate(40px,30px) scale(1.02); }
        }
        .hero-content {
          position: relative; z-index: 10; text-align: center; max-width: 800px; padding: 0 24px;
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 20px 8px 12px;
          background: var(--bg-secondary);
          border: 1px solid var(--glass-border);
          border-radius: 100px;
          font-size: 0.8125rem; color: var(--text-secondary);
          margin-bottom: 32px; box-shadow: var(--card-shadow);
        }
        .badge-dot { width: 8px; height: 8px; background: #10b981; border-radius: 50%; animation: pulse 2s infinite; }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.7)} }

        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 7vw, 4.5rem);
          font-weight: 800; letter-spacing: -0.03em; line-height: 1.05;
          margin-bottom: 24px;
        }
        .hero-title .line { display: block; }
        .hero-title .highlight {
          background: var(--accent-gradient);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        .hero-desc {
          font-size: clamp(1rem, 2vw, 1.125rem);
          color: var(--text-secondary); max-width: 560px;
          margin: 0 auto 36px; line-height: 1.7;
        }
        .hero-desc strong { color: var(--text-primary); }

        .hero-actions {
          display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; margin-bottom: 48px;
        }
        .btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 28px; border-radius: 12px;
          font-weight: 600; font-size: 0.9375rem;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .btn-primary {
          background: var(--text-primary); color: var(--bg-primary);
        }
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
          background: var(--accent-primary); color: #fff;
        }
        .btn-secondary {
          background: var(--bg-secondary); color: var(--text-primary);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(10px);
        }
        .btn-secondary:hover {
          transform: translateY(-3px);
          box-shadow: var(--card-shadow);
          border-color: var(--accent-primary);
        }

        .hero-stats {
          display: flex; justify-content: center; gap: 48px;
        }
        .stat { text-align: center; }
        .stat-num {
          display: block; font-family: var(--font-display);
          font-size: 1.75rem; font-weight: 800;
          background: var(--accent-gradient);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        .stat-label { font-size: 0.8125rem; color: var(--text-secondary); margin-top: 4px; }

        .scroll-indicator {
          position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%);
          z-index: 10; color: var(--text-secondary); font-size: 1.5rem;
          animation: bounce 2s ease-in-out infinite;
          transition: color var(--transition-fast);
        }
        .scroll-indicator:hover { color: var(--accent-primary); }
        @keyframes bounce {
          0%,100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 2.2rem; }
          .hero-actions { flex-direction: column; }
          .btn { justify-content: center; }
          .hero-stats { gap: 24px; }
        }
      `}</style>
    </section>
  );
};

export default Hero;

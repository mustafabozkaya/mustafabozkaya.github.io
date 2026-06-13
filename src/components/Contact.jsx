import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section contact-section" aria-label="Contact">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's work together</h2>
          <p className="section-desc">Have a project in mind? Let's discuss how I can help bring your AI vision to life.</p>
        </motion.div>

        <div className="contact-grid">
          <motion.div className="contact-info" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3>Get in touch</h3>
            <p>I'm currently available for freelance work and open to full-time opportunities in AI Engineering and MLOps roles.</p>
            <div className="contact-links">
              <a href="mailto:info.mustafa.b@gmail.com" className="contact-link">
                <span className="contact-icon"><FaEnvelope /></span>
                <span className="contact-text"><strong>Email</strong><span>info.mustafa.b@gmail.com</span></span>
              </a>
              <a href="https://linkedin.com/in/mustafa-bozkaya" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="contact-icon"><FaLinkedin /></span>
                <span className="contact-text"><strong>LinkedIn</strong><span>linkedin.com/in/mustafa-bozkaya</span></span>
              </a>
              <a href="https://github.com/mustafabozkaya" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="contact-icon"><FaGithub /></span>
                <span className="contact-text"><strong>GitHub</strong><span>github.com/mustafabozkaya</span></span>
              </a>
              <a href="tel:05455170775" className="contact-link">
                <span className="contact-icon"><FaPhone /></span>
                <span className="contact-text"><strong>Phone</strong><span>0545 517 07 75</span></span>
              </a>
            </div>
          </motion.div>

          <motion.form className="contact-form" onSubmit={handleSubmit} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Your name" required autoComplete="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="your@email.com" required autoComplete="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Tell me about your project..." required></textarea>
            </div>
            <button type="submit" className="form-submit">
              {submitted ? '✓ Sent!' : 'Send Message →'}
            </button>
          </motion.form>
        </div>
      </div>

      <style>{`
        .contact-section { background: var(--bg-secondary); }
        .section-label { display:inline-flex; align-items:center; gap:8px; font-family:var(--font-code); font-size:0.75rem; font-weight:500; color:var(--accent-primary); letter-spacing:0.15em; text-transform:uppercase; margin-bottom:16px; }
        .section-label::before { content:''; width:24px; height:1px; background:var(--accent-primary); }
        .section-title { font-family:var(--font-display); font-size:clamp(2rem,4vw,3rem); font-weight:800; letter-spacing:-0.03em; margin-bottom:16px; }
        .section-desc { font-size:1.125rem; color:var(--text-secondary); max-width:600px; line-height:1.7; margin-bottom:48px; }
        .contact-grid { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:start; }
        .contact-info h3 { font-family:var(--font-display); font-size:1.5rem; font-weight:700; margin-bottom:16px; }
        .contact-info > p { color:var(--text-secondary); line-height:1.8; margin-bottom:32px; }
        .contact-links { display:flex; flex-direction:column; gap:12px; }
        .contact-link { display:flex; align-items:center; gap:16px; padding:16px 20px; background:var(--bg-primary); border:1px solid var(--glass-border); border-radius:12px; transition:all .3s; }
        .contact-link:hover { transform:translateX(8px); box-shadow:var(--card-shadow); border-color:var(--accent-primary); }
        .contact-icon { width:44px; height:44px; border-radius:10px; background:var(--bg-tertiary); display:flex; align-items:center; justify-content:center; font-size:1.125rem; color:var(--accent-primary); flex-shrink:0; }
        .contact-text { display:flex; flex-direction:column; }
        .contact-text strong { font-weight:600; color:var(--text-primary); font-size:0.875rem; }
        .contact-text span { color:var(--text-secondary); font-size:0.8125rem; }
        .contact-form { display:flex; flex-direction:column; gap:16px; }
        .form-group { display:flex; flex-direction:column; gap:6px; }
        .form-group label { font-size:0.8125rem; font-weight:600; color:var(--text-secondary); }
        .form-group input, .form-group textarea {
          padding:14px 16px; background:var(--bg-primary);
          border:1px solid var(--glass-border); border-radius:10px;
          color:var(--text-primary); font-family:var(--font-main); font-size:0.9375rem;
          transition:all .2s; resize:none;
        }
        .form-group input:focus, .form-group textarea:focus { outline:none; border-color:var(--accent-primary); box-shadow:0 0 0 3px rgba(99,102,241,0.1); }
        .form-submit { padding:14px 28px; background:var(--text-primary); color:var(--bg-primary); border-radius:10px; font-weight:600; font-size:0.9375rem; transition:all .3s; align-self:flex-start; }
        .form-submit:hover { transform:translateY(-2px); box-shadow:0 8px 30px rgba(0,0,0,0.12); background:var(--accent-primary); color:#fff; }
        @media(max-width:768px) { .contact-grid { grid-template-columns:1fr; gap:40px; } }
      `}</style>
    </section>
  );
};

export default Contact;

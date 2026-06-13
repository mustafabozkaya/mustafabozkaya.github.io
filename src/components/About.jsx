import React from 'react';
import { motion } from 'framer-motion';
import * as SiIcons from 'react-icons/si';
import { skills } from '../data/skills';

const About = () => {
  return (
    <section id="about" className="section about-section" aria-label="About">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="section-label">About Me</span>
          <h2 className="section-title">Turning complex AI into<br/>real-world solutions</h2>
          <p className="section-desc">Computer Engineer with dual expertise in AI/ML and MLOps infrastructure.</p>
        </motion.div>

        <div className="about-grid">
          <motion.div className="about-bio" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p>I'm a Computer Engineer (B.Sc. from İstanbul Üniversitesi) specializing in AI Engineering and MLOps. I design and deploy end-to-end ML pipelines — from data ingestion and model training to containerized inference on Kubernetes clusters.</p>
            <p>My expertise spans generative AI (LLMs, RAG, fine-tuning), computer vision, NLP, and cloud-native ML infrastructure. I hold 27+ professional certifications including AWS Generative AI Developer - Professional.</p>
            <p>I believe in shipping production-grade AI systems — not just notebooks. Every project I build is designed for scale, reliability, and real-world impact.</p>
            <div className="about-tags">
              {['Python','Kubernetes','Docker','AWS','PyTorch','TensorFlow','LLMs','RAG','MLOps','CI/CD','FastAPI','PostgreSQL'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </motion.div>

          <motion.div className="skills-wrapper" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3>Technical Arsenal</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => {
                const Icon = SiIcons[skill.icon];
                return (
                  <div key={index} className="skill-item" title={skill.name}>
                    <div className="skill-icon-box">
                      {Icon ? <Icon size={28} /> : <SiIcons.SiIntel size={28} />}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .about-section { background: var(--bg-secondary); }
        .section-label { display:inline-flex; align-items:center; gap:8px; font-family:var(--font-code); font-size:0.75rem; font-weight:500; color:var(--accent-primary); letter-spacing:0.15em; text-transform:uppercase; margin-bottom:16px; }
        .section-label::before { content:''; width:24px; height:1px; background:var(--accent-primary); }
        .section-title { font-family:var(--font-display); font-size:clamp(2rem,4vw,3rem); font-weight:800; letter-spacing:-0.03em; margin-bottom:16px; }
        .section-desc { font-size:1.125rem; color:var(--text-secondary); max-width:600px; line-height:1.7; margin-bottom:48px; }
        .about-grid { display:grid; grid-template-columns:1fr 1.2fr; gap:64px; align-items:start; }
        .about-bio p { color:var(--text-secondary); margin-bottom:20px; font-size:1.0625rem; line-height:1.8; }
        .about-tags { display:flex; flex-wrap:wrap; gap:8px; margin-top:24px; }
        .tag { padding:6px 14px; background:var(--bg-primary); border:1px solid var(--glass-border); border-radius:8px; font-size:0.8125rem; font-weight:500; color:var(--text-secondary); transition:all .2s; }
        .tag:hover { border-color:var(--accent-primary); color:var(--accent-primary); }
        .skills-wrapper h3 { font-family:var(--font-display); font-size:1.25rem; font-weight:700; margin-bottom:24px; }
        .skills-grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(100px, 1fr)); gap:20px; }
        .skill-item { display:flex; flex-direction:column; align-items:center; gap:8px; transition:transform .3s; }
        .skill-item:hover { transform:translateY(-6px); }
        .skill-icon-box { width:56px; height:56px; display:flex; align-items:center; justify-content:center; background:var(--bg-primary); border:1px solid var(--glass-border); border-radius:12px; color:var(--text-secondary); transition:all .3s; }
        .skill-item:hover .skill-icon-box { border-color:var(--accent-primary); color:var(--accent-primary); box-shadow:0 0 20px rgba(99,102,241,0.1); }
        .skill-name { font-size:0.75rem; color:var(--text-secondary); font-weight:500; text-align:center; }
        @media(max-width:992px) { .about-grid { grid-template-columns:1fr; gap:40px; } }
      `}</style>
    </section>
  );
};

export default About;

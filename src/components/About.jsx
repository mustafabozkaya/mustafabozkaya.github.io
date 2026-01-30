import React from 'react';
import * as SiIcons from 'react-icons/si';
import { skills } from '../data/skills';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          <div className="about-bio">
            <p>
              I am a Machine Learning R&D Engineer passionate about Deep Learning and innovative technologies.
              With expertise in various programming languages and tools, I strive to create efficient and impactful solutions.
              My work bridges the gap between complex AI algorithms and user-friendly web interfaces.
            </p>
            <p>
              I enjoy tackling challenging problems in computer vision, NLP, and predictive analytics,
              bringing them to life with modern full-stack technologies like React, Next.js, and Python/FastAPI.
            </p>
          </div>

          <div className="skills-wrapper">
            <h3>Technical Arsenal</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => {
                const IconComponent = SiIcons[skill.icon];
                return (
                  <div key={index} className="skill-item" title={skill.name}>
                    <div className="skill-icon-box">
                      {IconComponent ? (
                        <IconComponent size={32} className="skill-icon" />
                      ) : (
                        <SiIcons.SiIntel size={32} className="skill-icon" />
                      )}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background: var(--bg-secondary);
          padding: 6rem 0;
        }
        
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
          align-items: start;
        }
        
        .about-bio p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-size: 1.15rem;
          line-height: 1.8;
        }

        .about-bio strong {
          color: var(--text-primary);
        }
        
        .skills-wrapper h3 {
          margin-bottom: 2.5rem;
          color: var(--text-primary);
          font-size: 1.5rem;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          gap: 2rem;
        }
        
        .skill-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          transition: transform 0.3s;
        }
        
        .skill-item:hover {
          transform: translateY(-8px);
        }

        .skill-icon-box {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-primary);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          color: var(--text-secondary);
          transition: all 0.3s;
        }

        .skill-item:hover .skill-icon-box {
          border-color: var(--accent-primary);
          color: var(--accent-primary);
          box-shadow: 0 0 20px rgba(56, 189, 248, 0.2);
        }
        
        .skill-name {
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-weight: 500;
          text-align: center;
        }
        
        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;

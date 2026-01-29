import React from 'react';
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
                            {skills.map((skill, index) => (
                                <div key={index} className="skill-item" title={skill.name}>
                                    {skill.type === 'image' ? (
                                        <img src={skill.icon} alt={skill.name} className="skill-icon-img" />
                                    ) : (
                                        <i className={`${skill.icon} skill-icon-font`}></i>
                                    )}
                                    <span className="skill-name">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .about-section {
          background: var(--bg-secondary);
        }
        
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-lg);
          align-items: start;
        }
        
        .about-bio p {
          color: var(--text-secondary);
          margin-bottom: var(--spacing-sm);
          font-size: 1.1rem;
        }
        
        .skills-wrapper h3 {
          margin-bottom: var(--spacing-md);
          color: var(--text-primary);
        }
        
        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        
        .skill-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          transition: transform var(--transition-fast);
        }
        
        .skill-item:hover {
          transform: translateY(-5px);
        }
        
        .skill-icon-font {
          font-size: 2.5rem;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
        }
        
        .skill-item:hover .skill-icon-font {
          color: var(--accent-primary);
        }
        
        .skill-icon-img {
          width: 40px;
          height: 40px;
          object-fit: contain;
          filter: grayscale(100%);
          transition: filter var(--transition-fast);
        }
        
        .skill-item:hover .skill-icon-img {
          filter: grayscale(0%);
        }
        
        .skill-name {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
        
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
};

export default About;

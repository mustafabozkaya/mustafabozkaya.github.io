import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub } from 'react-icons/fa';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        onClick={e => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="modal-body">
          <div className="modal-image">
            <img src={project.images[0]} alt={project.title} />
          </div>

          <div className="modal-info">
            <div className="modal-header">
              <h2 className="modal-title">{project.title}</h2>
              <div className="modal-categories">
                {project.categories.map(cat => (
                  <span key={cat} className="modal-category">{cat}</span>
                ))}
              </div>
            </div>

            <p className="modal-desc">{project.longDescription}</p>

            <div className="tech-section">
              <h4>Technologies & Tools</h4>
              <div className="tech-tags">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            {project.repoLink && project.repoLink !== '#' && (
              <div className="modal-actions">
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn-repo">
                  <FaGithub /> View Source Code
                </a>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      <style>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .modal-content {
          background: var(--bg-secondary);
          width: 100%;
          max-width: 1000px;
          max-height: 90vh;
          border-radius: 20px;
          position: relative;
          overflow-y: auto;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          border: 1px solid var(--glass-border);
        }

        .close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: white;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: background 0.3s;
        }

        .close-btn:hover {
          background: var(--accent-primary);
        }

        .modal-body {
          display: grid;
          grid-template-columns: 1fr;
        }

        @media (min-width: 768px) {
          .modal-body {
            grid-template-columns: 1fr 1fr;
          }
        }

        .modal-image {
          height: 100%;
          min-height: 300px;
          background: var(--bg-tertiary);
        }

        .modal-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-info {
          padding: 2.5rem;
        }

        .modal-title {
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .modal-categories {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }

        .modal-category {
          font-size: 0.75rem;
          color: var(--accent-primary);
          background: rgba(56, 189, 248, 0.1);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .modal-desc {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .tech-section h4 {
          font-size: 1rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .tech-tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }

        .tech-tag {
          font-size: 0.85rem;
          background: var(--bg-tertiary);
          color: var(--text-primary);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          border: 1px solid var(--glass-border);
        }

        .btn-repo {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: var(--accent-gradient);
          color: white;
          padding: 1rem 1.75rem;
          border-radius: 12px;
          font-weight: 700;
          text-decoration: none;
          transition: transform 0.3s;
        }

        .btn-repo:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px -5px rgba(56, 189, 248, 0.4);
        }
      `}</style>
    </motion.div>
  );
};

const categories = ['All', 'Agentic AI', 'Machine Learning', 'MCP', 'Computer Vision', 'Robotics', 'Web', 'Mobile'];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter(project =>
    filter === 'All' || project.categories.includes(filter)
  );

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Project Showcase</h2>
          <p className="mega-status">Senior Portfolio Expansion • 20+ Systems</p>

          <div className="filter-container">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="projects-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      <style>{`
        .projects-section {
          padding: var(--spacing-xl) 0;
          background: var(--bg-primary);
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }

        .mega-status {
          color: var(--text-secondary);
          font-family: 'Space Mono', monospace;
          background: rgba(56, 189, 248, 0.1);
          display: inline-block;
          padding: 0.4rem 1rem;
          border-radius: 4px;
          font-size: 0.9rem;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .filter-container {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-top: 3rem;
        }

        .filter-btn {
          padding: 0.6rem 1.4rem;
          border-radius: 30px;
          background: var(--bg-secondary);
          color: var(--text-secondary);
          border: 1px solid var(--glass-border);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .filter-btn:hover {
          border-color: var(--accent-primary);
          color: var(--accent-primary);
          transform: translateY(-2px);
        }

        .filter-btn.active {
          background: var(--accent-gradient);
          color: white;
          border-color: transparent;
          box-shadow: 0 10px 20px -5px rgba(56, 189, 248, 0.4);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 2.5rem;
        }
      `}</style>
    </section>
  );
};

export default Projects;

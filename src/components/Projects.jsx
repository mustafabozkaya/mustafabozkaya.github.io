import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import { FaTimes, FaGithub } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
    const [filter, setFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);


    // Simplification: top 5 categories to avoid clutter + 'all'
    const topCategories = ['all', 'react', 'machinelearning', 'mobile', 'web', 'python'];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.categories.includes(filter));

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <div className="filters">
                    {topCategories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat.replace('_', ' ')}
                        </button>
                    ))}
                </div>

                <motion.div layout className="projects-grid">
                    <AnimatePresence>
                        {filteredProjects.map(project => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onClick={setSelectedProject}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="modal-content"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            onClick={e => e.stopPropagation()}
                        >
                            <button className="close-btn" onClick={() => setSelectedProject(null)}>
                                <FaTimes />
                            </button>

                            <div className="modal-body">
                                <div className="modal-image">
                                    <img src={selectedProject.images[0]} alt={selectedProject.title} />
                                </div>

                                <div className="modal-info">
                                    <h2>{selectedProject.title}</h2>
                                    <p className="long-desc">{selectedProject.longDescription}</p>

                                    <div className="tech-stack">
                                        <h4>Technologies</h4>
                                        <div className="tags">
                                            {selectedProject.technologies.map(tech => (
                                                <span key={tech} className="tech-tag">{tech}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="modal-actions">
                                        {selectedProject.repoLink && (
                                            <a href={selectedProject.repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                                <FaGithub /> Repository
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        .projects-section {
          background: var(--bg-primary);
        }
        
        .filters {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }
        
        .filter-btn {
          padding: 0.5rem 1.5rem;
          border-radius: 20px;
          background: var(--bg-secondary);
          color: var(--text-secondary);
          border: 1px solid var(--glass-border);
          transition: all var(--transition-fast);
          text-transform: capitalize;
        }
        
        .filter-btn.active, .filter-btn:hover {
          background: var(--accent-primary);
          color: white;
          border-color: var(--accent-primary);
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.8);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          backdrop-filter: blur(5px);
        }
        
        .modal-content {
          background: var(--bg-secondary);
          width: 100%;
          max-width: 900px;
          max-height: 90vh;
          border-radius: 12px;
          position: relative;
          overflow-y: auto;
          box-shadow: var(--glass-shadow);
        }
        
        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          font-size: 1.5rem;
          color: white;
          background: rgba(0,0,0,0.5);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }
        
        .modal-body {
          display: flex;
          flex-direction: column;
        }
        
        .modal-image img {
          width: 100%;
          max-height: 400px;
          object-fit: cover;
        }
        
        .modal-info {
          padding: 2rem;
        }
        
        .long-desc {
          margin: 1rem 0;
          color: var(--text-secondary);
          line-height: 1.7;
        }
        
        .tech-stack {
          margin: 2rem 0;
        }
        
        .tech-tag {
          display: inline-block;
          margin: 0.3rem;
          padding: 0.4rem 0.8rem;
          background: rgba(56, 189, 248, 0.1);
          color: var(--accent-primary);
          border-radius: 4px;
          font-size: 0.9rem;
        }
        
        .modal-actions {
          margin-top: 1rem;
        }
      `}</style>
        </section>
    );
};

export default Projects;

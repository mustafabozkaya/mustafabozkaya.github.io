import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onClick }) => {
    return (
        <motion.div
            className="project-card"
            whileHover={{ y: -10 }}
            onClick={() => onClick(project)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
        >
            <div className="card-image-wrapper">
                <img src={project.images[0]} alt={project.title} loading="lazy" />
                <div className="card-overlay">
                    <span>View Details</span>
                </div>
            </div>

            <div className="card-content">
                <div className="card-tags">
                    {project.categories.slice(0, 3).map((cat, i) => (
                        <span key={i} className="tag">{cat.replace('_', ' ')}</span>
                    ))}
                </div>
                <h3 className="card-title">{project.title}</h3>
                <p className="card-desc">{project.shortDescription}</p>
            </div>

            <style>{`
        .project-card {
          background: var(--bg-secondary);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--glass-border);
          cursor: pointer;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .card-image-wrapper {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        
        .card-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-normal);
        }
        
        .project-card:hover .card-image-wrapper img {
          transform: scale(1.05);
        }
        
        .card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-fast);
        }
        
        .project-card:hover .card-overlay {
          opacity: 1;
        }
        
        .card-overlay span {
          color: white;
          font-weight: 600;
          padding: 0.5rem 1rem;
          border: 1px solid white;
          border-radius: 20px;
        }
        
        .card-content {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .card-tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }
        
        .tag {
          font-size: 0.7rem;
          background: var(--bg-tertiary);
          color: var(--accent-primary);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .card-title {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }
        
        .card-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
      `}</style>
        </motion.div>
    );
};

export default ProjectCard;

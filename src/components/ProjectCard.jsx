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
          border-radius: 16px;
          overflow: hidden;
          box-shadow: var(--card-shadow);
          border: 1px solid var(--glass-border);
          cursor: pointer;
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: border-color 0.3s;
        }

        .project-card:hover {
          border-color: var(--accent-primary);
        }
        
        .card-image-wrapper {
          position: relative;
          height: 220px;
          overflow: hidden;
        }
        
        .card-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .project-card:hover .card-image-wrapper img {
          transform: scale(1.1);
        }
        
        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15, 23, 42, 0.8), transparent);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s;
        }
        
        .project-card:hover .card-overlay {
          opacity: 1;
        }
        
        .card-overlay span {
          color: white;
          font-weight: 700;
          padding: 0.6rem 1.2rem;
          border: 2px solid white;
          border-radius: 30px;
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 1px;
          background: rgba(0,0,0,0.2);
          backdrop-filter: blur(4px);
        }
        
        .card-content {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          background: var(--bg-secondary);
        }
        
        .card-tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 0.75rem;
        }
        
        .tag {
          font-size: 0.65rem;
          background: rgba(56, 189, 248, 0.1);
          color: var(--accent-primary);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
        }
        
        .card-title {
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
          font-weight: 700;
        }
        
        .card-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `}</style>
    </motion.div>
  );
};

export default ProjectCard;

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FiFolder, FiArrowUpRight } from 'react-icons/fi';

const ProjectCard = ({ project, onClick }) => {
  const imgSrc = project.images && project.images[0] ? project.images[0] : null;

  return (
    <motion.article
      className="project-card"
      whileHover={{ y: -8 }}
      onClick={() => onClick(project)}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      tabIndex={0}
      role="button"
      aria-label={`View ${project.title}`}
      onKeyDown={e => { if (e.key === 'Enter') onClick(project); }}
    >
      <div className="card-image">
        {imgSrc ? (
          <img src={imgSrc} alt={project.title} loading="lazy" width="400" height="240"
            onError={e => { e.target.style.display='none'; e.target.nextElementSibling.style.display='flex'; }} />
        ) : null}
        <div className="card-placeholder" style={{display: imgSrc ? 'none' : 'flex'}}>
          <FiFolder size={32} />
        </div>
        <div className="card-hover-overlay">
          <span>View Details <FiArrowUpRight /></span>
        </div>
      </div>

      <div className="card-body">
        <div className="card-categories">
          {project.categories?.slice(0, 2).map((cat, i) => (
            <span key={i} className="card-cat">{cat}</span>
          ))}
        </div>
        <h3 className="card-title">{project.title}</h3>
        <p className="card-desc">{project.shortDescription}</p>
        <div className="card-techs">
          {project.technologies?.slice(0, 4).map((t, i) => (
            <span key={i} className="card-tech">{t}</span>
          ))}
          {project.technologies?.length > 4 && (
            <span className="card-tech more">+{project.technologies.length - 4}</span>
          )}
        </div>
      </div>

      <style>{`
        .project-card {
          background: var(--bg-secondary);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--glass-border);
          cursor: pointer;
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
          position: relative;
        }
        .project-card:hover {
          border-color: transparent;
          box-shadow: var(--card-shadow-hover);
        }
        .card-image {
          position: relative; aspect-ratio: 16/10; overflow: hidden;
          background: var(--bg-tertiary);
        }
        .card-image img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
        }
        .project-card:hover .card-image img { transform: scale(1.05); }
        .card-placeholder {
          width: 100%; height: 100%;
          align-items: center; justify-content: center;
          color: var(--accent-primary); opacity: 0.5;
          background: linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-primary) 100%);
        }
        .card-hover-overlay {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(2px);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: opacity 0.3s;
        }
        .project-card:hover .card-hover-overlay { opacity: 1; }
        .card-hover-overlay span {
          color: #fff; font-weight: 700; font-size: 0.875rem;
          padding: 10px 24px; border: 2px solid rgba(255,255,255,0.6);
          border-radius: 30px; display: flex; align-items: center; gap: 8px;
        }
        .card-body {
          padding: 20px; flex: 1; display: flex; flex-direction: column;
        }
        .card-categories { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 10px; }
        .card-cat {
          font-size: 0.6875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;
          color: var(--accent-primary);
          background: rgba(99,102,241,0.08);
          padding: 3px 10px; border-radius: 6px;
        }
        .card-title {
          font-family: var(--font-display);
          font-size: 1.125rem; font-weight: 700;
          color: var(--text-primary); margin-bottom: 8px;
          letter-spacing: -0.01em;
          display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
        }
        .card-desc {
          font-size: 0.875rem; color: var(--text-secondary);
          line-height: 1.6; flex: 1;
          display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
        }
        .card-techs {
          display: flex; flex-wrap: wrap; gap: 6px; margin-top: 14px;
        }
        .card-tech {
          font-family: var(--font-code);
          font-size: 0.6875rem;
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          padding: 3px 8px; border-radius: 4px;
        }
        .card-tech.more { opacity: 0.7; }
      `}</style>
    </motion.article>
  );
};

export default ProjectCard;

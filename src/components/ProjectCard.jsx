import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onClick }) => {
  const cardRef = useRef(null);
  const isHovered = useRef(false);

  const handleMouseEnter = () => {
    isHovered.current = true;
    if (cardRef.current) {
      cardRef.current.classList.add('tilt-hover');
    }
  };

  const handleMouseMove = (e) => {
    if (!isHovered.current || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / centerY * -6;
    const rotateY = (x - centerX) / centerX * 6;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    isHovered.current = false;
    if (cardRef.current) {
      cardRef.current.classList.remove('tilt-hover');
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    }
  };

  return (
    <motion.div
      className="project-card"
      ref={cardRef}
      onClick={() => onClick(project)}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      layout
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
          transition: border-color 0.3s, box-shadow 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
          will-change: transform;
        }

        .project-card.tilt-hover {
          border-color: var(--accent-primary);
          box-shadow: 0 12px 40px rgba(99, 102, 241, 0.12);
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

        .project-card.tilt-hover .card-image-wrapper img {
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

        .project-card.tilt-hover .card-overlay {
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
          transform: translateZ(20px);
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
          font-family: var(--font-heading);
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
          font-weight: 700;
        }

        .card-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          font-family: var(--font-body);
        }
      `}</style>
    </motion.div>
  );
};

export default ProjectCard;

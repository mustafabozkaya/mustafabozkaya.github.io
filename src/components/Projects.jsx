import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub } from 'react-icons/fa';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const categories = ['All', 'Agentic AI', 'Machine Learning', 'Computer Vision', 'Robotics', 'Web', 'Mobile', 'MCP'];

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div className="modal-content" initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close"><FaTimes /></button>
        <div className="modal-body">
          {project.images?.[0] && (
            <div className="modal-image">
              <img src={project.images[0]} alt={project.title} width="600" height="340"
                onError={e => { e.target.style.display='none'; e.target.nextElementSibling.style.display='flex'; }} />
              <div className="modal-image-placeholder" style={{display:'none'}}>📁</div>
            </div>
          )}
          <div className="modal-info">
            <div className="modal-categories">
              {project.categories?.map((c, i) => <span key={i} className="modal-cat">{c}</span>)}
            </div>
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-desc">{project.longDescription || project.shortDescription}</p>
            <div className="modal-techs">
              {project.technologies?.map((t, i) => <span key={i} className="modal-tech">{t}</span>)}
            </div>
            {project.repoLink && project.repoLink !== '#' && (
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="modal-link">
                <FaGithub /> View on GitHub
              </a>
            )}
          </div>
        </div>
      </motion.div>
      <style>{`
        .modal-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.6); backdrop-filter:blur(8px); z-index:9999; display:flex; align-items:center; justify-content:center; padding:24px; }
        .modal-content { background:var(--bg-secondary); width:100%; max-width:800px; max-height:90vh; border-radius:20px; position:relative; overflow-y:auto; box-shadow:0 25px 50px -12px rgba(0,0,0,0.25); border:1px solid var(--glass-border); }
        .modal-close { position:absolute; top:16px; right:16px; background:var(--bg-tertiary); border:none; color:var(--text-secondary); width:40px; height:40px; border-radius:10px; display:flex; align-items:center; justify-content:center; cursor:pointer; z-index:10; transition:all .2s; }
        .modal-close:hover { background:var(--text-primary); color:var(--bg-primary); }
        .modal-body { display:grid; grid-template-columns:1fr; }
        @media(min-width:768px) { .modal-body { grid-template-columns:1fr 1fr; } }
        .modal-image { min-height:250px; background:var(--bg-tertiary); }
        .modal-image img { width:100%; height:100%; object-fit:cover; }
        .modal-image-placeholder { width:100%; height:100%; align-items:center; justify-content:center; font-size:3rem; }
        .modal-info { padding:32px; }
        .modal-categories { display:flex; gap:6px; flex-wrap:wrap; margin-bottom:12px; }
        .modal-cat { font-size:0.6875rem; font-weight:600; text-transform:uppercase; letter-spacing:0.05em; color:var(--accent-primary); background:rgba(99,102,241,0.08); padding:4px 12px; border-radius:6px; }
        .modal-title { font-family:var(--font-display); font-size:1.75rem; font-weight:800; color:var(--text-primary); margin-bottom:16px; }
        .modal-desc { font-size:1rem; color:var(--text-secondary); line-height:1.8; margin-bottom:24px; }
        .modal-techs { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:24px; }
        .modal-tech { font-family:var(--font-code); font-size:0.75rem; background:var(--bg-tertiary); color:var(--text-secondary); padding:4px 12px; border-radius:6px; }
        .modal-link { display:inline-flex; align-items:center; gap:8px; background:var(--text-primary); color:var(--bg-primary); padding:12px 24px; border-radius:10px; font-weight:600; transition:all .3s; }
        .modal-link:hover { transform:translateY(-2px); box-shadow:var(--card-shadow); background:var(--accent-primary); color:#fff; }
      `}</style>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = filter === 'All' ? projects : projects.filter(p => p.categories?.includes(filter));

  return (
    <section id="projects" className="section projects-section" aria-label="Projects">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc">A selection of AI/ML projects spanning generative AI, computer vision, NLP, and MLOps.</p>
          <div className="filter-container" role="tablist">
            {categories.map(cat => (
              <button key={cat} role="tab" className={`filter-btn ${filter === cat ? 'active' : ''}`} onClick={() => setFilter(cat)}>
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map(p => (
              <ProjectCard key={p.id} project={p} onClick={setSelected} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>

      <style>{`
        .projects-section { background: var(--bg-primary); }
        .section-header { text-align: center; margin-bottom: 48px; }
        .section-label {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: var(--font-code); font-size: 0.75rem; font-weight: 500;
          color: var(--accent-primary); letter-spacing: 0.15em; text-transform: uppercase;
          margin-bottom: 16px;
        }
        .section-label::before { content: ''; width: 24px; height: 1px; background: var(--accent-primary); }
        .section-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800; letter-spacing: -0.03em; margin-bottom: 16px;
        }
        .section-desc { font-size: 1.125rem; color: var(--text-secondary); max-width: 600px; margin: 0 auto; line-height: 1.7; }
        .filter-container { display: flex; justify-content: center; gap: 8px; flex-wrap: wrap; margin-top: 32px; }
        .filter-btn {
          padding: 8px 18px; border-radius: 10px;
          background: var(--bg-secondary); color: var(--text-secondary);
          border: 1px solid var(--glass-border);
          font-weight: 500; font-size: 0.8125rem;
          transition: all 0.2s; cursor: pointer;
        }
        .filter-btn:hover { color: var(--text-primary); border-color: var(--accent-primary); }
        .filter-btn.active { background: var(--text-primary); color: var(--bg-primary); border-color: var(--text-primary); }
        .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 24px; }
        @media(max-width:768px) { .projects-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
};

export default Projects;

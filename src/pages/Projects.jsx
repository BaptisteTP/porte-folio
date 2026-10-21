import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { usePortfolio } from '../context/PortfolioContext';

export default function Projects() {
  const { t } = usePortfolio();

  return (
    <div className="page-wrapper">
      <section className="projects-section">
        <div className="container">
          <div className="section-header">
            <h1 className="sub-title">{t.projects.title}</h1>
            <p className="section-desc">{t.projects.lead}</p>
          </div>

          {/* 1. Projets Académiques */}
          <h2 className="project-subheading">{t.projects.sectionAcademic}</h2>
          <div className="projects-grid">
            {t.projects.academic.map((proj, idx) => (
              <ProjectCard 
                key={`academic-${idx}`}
                title={proj.title}
                description={proj.desc}
                githubUrl={proj.github}
                tags={proj.tags}
                liveUrl={proj.liveUrl}
              />
            ))}
          </div>

          {/* 2. Projets Personnels */}
          <h2 className="project-subheading" style={{ marginTop: '50px' }}>{t.projects.sectionPersonal}</h2>
          <div className="projects-grid">
            {t.projects.personal.map((proj, idx) => (
              <ProjectCard 
                key={`personal-${idx}`}
                title={proj.title}
                description={proj.desc}
                githubUrl={proj.github}
                tags={proj.tags}
                liveUrl={proj.liveUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

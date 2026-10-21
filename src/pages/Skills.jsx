import React from 'react';
import { 
  Code2, 
  Globe2, 
  Terminal, 
  Users2, 
  Layers 
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export default function Skills() {
  const { t } = usePortfolio();

  return (
    <div className="page-wrapper">
      <section className="skills-section">
        <div className="container">
          <div className="section-header">
            <h1 className="sub-title">{t.skills.title}</h1>
            <p className="section-desc">{t.skills.lead}</p>
          </div>

          <div className="skills-page-layout">
            {/* 1. Langages de programmation */}
            <div className="skills-block">
              <h2 className="project-subheading">
                <Code2 size={20} />
                <span>{t.skills.categories.languages}</span>
              </h2>
              <div className="skills-grid">
                {t.skills.languagesList.map((item, idx) => (
                  <div key={idx} className="skill-card">
                    <h4>{item.name}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Web & Frameworks */}
            <div className="skills-block" style={{ marginTop: '40px' }}>
              <h2 className="project-subheading">
                <Globe2 size={20} />
                <span>{t.skills.categories.webFrameworks}</span>
              </h2>
              <div className="skills-grid">
                {t.skills.webList.map((item, idx) => (
                  <div key={idx} className="skill-card">
                    <h4>{item.name}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Outils, Systèmes & DevOps */}
            <div className="skills-block" style={{ marginTop: '40px' }}>
              <h2 className="project-subheading">
                <Terminal size={20} />
                <span>{t.skills.categories.toolsEnvironment}</span>
              </h2>
              <div className="skills-grid">
                {t.skills.toolsList.map((item, idx) => (
                  <div key={idx} className="skill-card">
                    <h4>{item.name}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Méthodologies & Génie Logiciel */}
            <div className="skills-block" style={{ marginTop: '40px' }}>
              <h2 className="project-subheading">
                <Layers size={20} />
                <span>{t.skills.categories.methodologies}</span>
              </h2>
              <div className="skills-grid">
                {t.skills.methodsList.map((item, idx) => (
                  <div key={idx} className="skill-card">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Soft Skills (Savoir-être) */}
            <div className="skills-block" style={{ marginTop: '40px' }}>
              <h2 className="project-subheading">
                <Users2 size={20} />
                <span>{t.skills.categories.softSkills}</span>
              </h2>
              <div className="skills-grid">
                {t.skills.softSkillsList.map((item, idx) => (
                  <div key={idx} className="skill-card">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

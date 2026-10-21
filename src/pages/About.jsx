import React, { useState } from 'react';
import { Briefcase, GraduationCap, Languages, Heart } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export default function About() {
  const { t } = usePortfolio();
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <div className="page-wrapper">
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <h1 className="sub-title">{t.about.title}</h1>
            <p className="section-desc">{t.about.lead}</p>
          </div>

          <div className="tabs-container">
            <div className="tab-nav">
              <button 
                className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
                onClick={() => setActiveTab('experience')}
              >
                <Briefcase size={17} />
                <span>{t.about.tabs.experience}</span>
              </button>
              <button 
                className={`tab-btn ${activeTab === 'studies' ? 'active' : ''}`}
                onClick={() => setActiveTab('studies')}
              >
                <GraduationCap size={17} />
                <span>{t.about.tabs.studies}</span>
              </button>
              <button 
                className={`tab-btn ${activeTab === 'languages' ? 'active' : ''}`}
                onClick={() => setActiveTab('languages')}
              >
                <Languages size={17} />
                <span>{t.about.tabs.languages}</span>
              </button>
              <button 
                className={`tab-btn ${activeTab === 'interests' ? 'active' : ''}`}
                onClick={() => setActiveTab('interests')}
              >
                <Heart size={17} />
                <span>{t.about.tabs.interests}</span>
              </button>
            </div>

            {/* Tab: Experience */}
            {activeTab === 'experience' && (
              <div className="tab-pane">
                <div className="timeline">
                  {t.about.experiences.map((item, idx) => (
                    <div key={idx} className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-meta">
                        <span className="timeline-date">{item.date}</span>
                      </div>
                      <h3 className="timeline-title">{item.title}</h3>
                      <p className="timeline-place">{item.place}</p>
                      {item.desc && <p className="timeline-desc">{item.desc}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab: Studies */}
            {activeTab === 'studies' && (
              <div className="tab-pane">
                <div className="timeline">
                  {t.about.studies.map((item, idx) => (
                    <div key={idx} className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-meta">
                        <span className="timeline-date">{item.date}</span>
                      </div>
                      <h3 className="timeline-title">{item.title}</h3>
                      <p className="timeline-place">{item.place}</p>
                      {item.desc && <p className="timeline-desc">{item.desc}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab: Languages */}
            {activeTab === 'languages' && (
              <div className="tab-pane">
                <div className="skills-grid">
                  {t.about.languages.map((item, idx) => (
                    <div key={idx} className="skill-card">
                      <div className="skill-card-icon">
                        <Languages size={24} />
                      </div>
                      <h4>{item.name}</h4>
                      <p>{item.level}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab: Interests */}
            {activeTab === 'interests' && (
              <div className="tab-pane">
                <div className="skills-grid">
                  {t.about.interests.map((item, idx) => (
                    <div key={idx} className="skill-card">
                      <div className="skill-card-icon">
                        <Heart size={24} />
                      </div>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

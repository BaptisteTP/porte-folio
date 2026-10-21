import React from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { usePortfolio } from '../context/PortfolioContext';

/**
 * Reusable Project Card Component
 * @param {string} title - Project title
 * @param {string} description - Project description
 * @param {string} githubUrl - Link to the GitHub repository
 * @param {string[]} tags - Technologies/languages used (e.g. ['React', 'PHP'])
 * @param {string} liveUrl - Optional live demo URL (e.g. Vercel)
 */
export default function ProjectCard({ 
  title, 
  description, 
  githubUrl, 
  tags = [], 
  liveUrl
}) {
  const { t } = usePortfolio();

  return (
    <div className="project-card">
      <div>
        <div className="project-top">
          <div className="project-title" style={{ margin: 0 }}>{title}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="github-link"
                title={t.projects.viewDemo}
                aria-label="Live Demo"
              >
                <ExternalLink size={19} />
              </a>
            )}
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="github-link"
                title={t.projects.viewCode}
                aria-label="GitHub Repository"
              >
                <GithubIcon size={20} />
              </a>
            )}
          </div>
        </div>

        <p className="project-desc">{description}</p>
      </div>

      <div>
        {tags && tags.length > 0 && (
          <div className="project-tags">
            {tags.map((tag, idx) => (
              <span key={idx} className="tag">{tag}</span>
            ))}
          </div>
        )}

        <div style={{ display: 'flex', gap: '8px' }}>
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline project-btn"
            >
              <GithubIcon size={15} />
              <span>{t.projects.viewCode}</span>
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary project-btn"
            >
              <ExternalLink size={15} />
              <span>{t.projects.viewDemo}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { usePortfolio } from '../context/PortfolioContext';

export default function Home() {
  const { t } = usePortfolio();

  return (
    <div className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="status-badge">
            <span className="status-dot"></span>
            <span>{t.hero.status}</span>
          </div>
          <h1>
            <span>{t.hero.hello}</span><br />
            <span>Baptiste Tronel-Peyroz</span>
          </h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <p className="hero-description">{t.hero.description}</p>

          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              <span>{t.hero.ctaProjects}</span>
              <ArrowRight size={17} />
            </Link>
            <a href="/CV_baptiste_tronel-Peyroz.pdf" download className="btn btn-secondary">
              <Download size={17} />
              <span>{t.hero.ctaResume}</span>
            </a>
          </div>

          <div className="hero-socials">
            <a 
              href="https://fr.linkedin.com/in/baptiste-tronel-peyroz-8a03a72a0?original_referer=https%3A%2F%2Fwww.linkedin.com%2F" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedinIcon size={21} />
            </a>
            <a 
              href="https://github.com/BaptisteTP" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <GithubIcon size={21} />
            </a>
            <a href="mailto:tronelpeyroz.baptiste@gmail.com" aria-label="Email" title="Email">
              <Mail size={21} />
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-card">
            <img src="/espacetravail.jpg" alt="Baptiste" className="hero-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

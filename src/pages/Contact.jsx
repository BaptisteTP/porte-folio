import React, { useState } from 'react';
import { Mail, Phone, Download, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { usePortfolio } from '../context/PortfolioContext';

export default function Contact() {
  const { t } = usePortfolio();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const sub = formData.subject || 'Contact Portfolio';
    const body = `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:tronelpeyroz.baptiste@gmail.com?subject=${encodeURIComponent(sub + ' - ' + formData.name)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="page-wrapper">
      <section className="contact-section">
        <div className="container">
          <div className="section-header">
            <h1 className="sub-title">{t.contact.title}</h1>
            <p className="section-desc">{t.contact.lead}</p>
          </div>

          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info-card">
              <h3>{t.contact.infoTitle}</h3>
              <p>{t.contact.infoDesc}</p>

              <div className="contact-methods">
                <a href="mailto:tronelpeyroz.baptiste@gmail.com" className="contact-method-item">
                  <div className="contact-method-icon"><Mail size={18} /></div>
                  <div>
                    <div className="contact-method-label">{t.contact.emailLabel}</div>
                    <div className="contact-method-value">tronelpeyroz.baptiste@gmail.com</div>
                  </div>
                </a>

                <a href="tel:0651176866" className="contact-method-item">
                  <div className="contact-method-icon"><Phone size={18} /></div>
                  <div>
                    <div className="contact-method-label">{t.contact.phoneLabel}</div>
                    <div className="contact-method-value">06 51 17 68 66</div>
                  </div>
                </a>

                <a 
                  href="https://fr.linkedin.com/in/baptiste-tronel-peyroz-8a03a72a0?original_referer=https%3A%2F%2Fwww.linkedin.com%2F" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-method-item"
                >
                  <div className="contact-method-icon"><LinkedinIcon size={18} /></div>
                  <div>
                    <div className="contact-method-label">LinkedIn</div>
                    <div className="contact-method-value">Baptiste Tronel-Peyroz</div>
                  </div>
                </a>

                <a 
                  href="https://github.com/BaptisteTP" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-method-item"
                >
                  <div className="contact-method-icon"><GithubIcon size={18} /></div>
                  <div>
                    <div className="contact-method-label">GitHub</div>
                    <div className="contact-method-value">github.com/BaptisteTP</div>
                  </div>
                </a>
              </div>

              <a 
                href="/CV_baptiste_tronel-Peyroz.pdf" 
                download 
                className="btn btn-primary" 
                style={{ width: '100%' }}
              >
                <Download size={17} />
                <span>{t.contact.downloadCV}</span>
              </a>
            </div>

            {/* Contact Form */}
            <div className="contact-form-card">
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">{t.contact.form.name}</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="form-control" 
                    placeholder={t.contact.form.namePlaceholder} 
                    value={formData.name}
                    onChange={handleFormChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{t.contact.form.email}</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-control" 
                    placeholder={t.contact.form.emailPlaceholder} 
                    value={formData.email}
                    onChange={handleFormChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">{t.contact.form.subject}</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    className="form-control" 
                    placeholder={t.contact.form.subjectPlaceholder} 
                    value={formData.subject}
                    onChange={handleFormChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">{t.contact.form.message}</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    className="form-control" 
                    rows={4} 
                    placeholder={t.contact.form.messagePlaceholder} 
                    value={formData.message}
                    onChange={handleFormChange}
                    required 
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  <Send size={17} />
                  <span>{t.contact.form.submit}</span>
                </button>
                <p className="form-notice">{t.contact.form.notice}</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

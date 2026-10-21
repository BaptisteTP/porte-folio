import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const PortfolioContext = createContext();

export function PortfolioProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('portfolio-lang') || 'fr');
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem('portfolio-lang', lang);
  }, [lang]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleLang = () => {
    setLang(prev => (prev === 'fr' ? 'en' : 'fr'));
  };

  const t = translations[lang];

  return (
    <PortfolioContext.Provider value={{ lang, theme, toggleTheme, toggleLang, t }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}

import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

export default function Footer() {
  const { t } = usePortfolio();

  return (
    <footer>
      <div className="container">
        <p>&copy; 2026 Baptiste Tronel-Peyroz. {t.footer.rights}</p>
      </div>
    </footer>
  );
}

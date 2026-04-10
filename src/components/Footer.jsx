export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-logo">Auto<span>Precision</span></div>
        <ul className="footer-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#avis">Avis</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">© 2026 AutoPrecision — Tous droits réservés</div>
        <div className="footer-credit">
          Créé par <a href="https://nicolasbregevin.netlify.app/" target="_blank" rel="noopener noreferrer">Nicolas Bregevin</a>
        </div>
      </div>
    </footer>
  )
}

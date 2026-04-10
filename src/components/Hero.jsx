export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="hero-badge">⚙ Garage certifié depuis 1998</div>
      <h1 className="hero-title">
        Votre voiture<br />
        <em>mérite le</em>
        <em>meilleur.</em>
      </h1>
      <p className="hero-sub">
        Experts en mécanique automobile, carrosserie et entretien. Nous traitons chaque véhicule avec le soin et la précision qu'il mérite.
      </p>
      <div className="hero-actions">
        <a href="#contact" className="btn-primary">Prendre rendez-vous</a>
        <a href="#services" className="btn-outline">Nos services</a>
      </div>
      <div className="hero-stats">
        <div className="stat-item">
          <div className="stat-num">25<span>+</span></div>
          <div className="stat-label">Années d'expérience</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">4<span>k</span></div>
          <div className="stat-label">Clients satisfaits</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">98<span>%</span></div>
          <div className="stat-label">Taux de satisfaction</div>
        </div>
      </div>
    </section>
  )
}

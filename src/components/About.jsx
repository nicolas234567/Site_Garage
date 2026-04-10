export default function About() {
  return (
    <div className="about" id="about">
      <div className="about-img">
        <img src="/img/about.jpg" alt="Atelier AutoPrecision" />
        <div className="about-img-overlay">
          <div className="num">25</div>
          <div className="label">Ans d'expertise</div>
        </div>
      </div>
      <div className="about-content">
        <p className="section-label reveal">Notre histoire</p>
        <h2 className="section-title reveal">Un garage fondé sur<br />la confiance</h2>
        <p className="section-sub reveal" style={{ marginBottom: '2rem' }}>
          Depuis 1998, AutoPrecision est le garage de référence du quartier. Fondé par Michel Durand, mécanicien passionné de la première heure, notre atelier a grandi autour d'une valeur fondamentale : l'honnêteté.
        </p>
        <p className="section-sub reveal" style={{ marginBottom: '2.5rem' }}>
          Nous ne faisons jamais de travaux inutiles. Avant toute intervention, nous vous expliquons clairement le diagnostic et vous soumettons un devis transparent et sans surprise.
        </p>
        <a href="#contact" className="btn-primary reveal">Rencontrez notre équipe</a>
      </div>
    </div>
  )
}

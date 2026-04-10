const services = [
  {
    icon: '🔧',
    name: 'Mécanique générale',
    desc: "Vidange, distribution, embrayage, boîte de vitesses… Nous intervenons sur toutes les marques et tous les modèles avec précision et fiabilité.",
  },
  {
    iconImg: { src: '/img/pistolet_peinture.png', alt: 'Pistolet à peinture' },
    name: 'Carrosserie & Peinture',
    desc: "Réparation de chocs, débosselage, traitement anticorrosion et peinture teintée à l'identique pour un résultat invisible et durable.",
  },
  {
    icon: '💻',
    name: 'Diagnostic électronique',
    desc: "Lecture de codes défauts, reprogrammation de calculateurs et diagnostic complet grâce à notre équipement de pointe.",
  },
  {
    iconImg: { src: '/img/disque_frein.png', alt: 'Disque de frein' },
    name: 'Freinage & Suspension',
    desc: "Plaquettes, disques, amortisseurs, rotules et trains roulants remis en état pour votre sécurité optimale sur la route.",
  },
  {
    icon: '❄️',
    name: 'Climatisation',
    desc: "Recharge, contrôle d'étanchéité et remplacement des composants de votre système de climatisation pour voyager en confort toute l'année.",
  },
  {
    icon: '🔍',
    name: 'Révision & Entretien',
    desc: "Révisions constructeur respectées, entretien préventif complet et rapport de santé détaillé remis à chaque intervention.",
  },
]

export default function Services() {
  return (
    <section className="section" id="services">
      <p className="section-label reveal">Ce que nous faisons</p>
      <h2 className="section-title reveal">Nos services</h2>
      <p className="section-sub reveal">
        De l'entretien courant aux réparations complexes, notre équipe de techniciens certifiés prend en charge tous vos besoins automobiles.
      </p>
      <div className="services-grid reveal">
        {services.map((service, i) => (
          <div className="service-card" key={i}>
            <span className="service-icon">
              {service.iconImg
                ? <img src={service.iconImg.src} alt={service.iconImg.alt} />
                : service.icon}
            </span>
            <div className="service-name">{service.name}</div>
            <p className="service-desc">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

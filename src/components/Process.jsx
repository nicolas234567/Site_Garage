const steps = [
  {
    num: '01',
    title: 'Prise de RDV',
    desc: "Contactez-nous par téléphone, email ou via le formulaire en ligne. Nous trouvons ensemble le créneau qui vous convient.",
  },
  {
    num: '02',
    title: 'Diagnostic',
    desc: "À la réception du véhicule, nous réalisons un diagnostic complet et gratuit pour identifier précisément les interventions nécessaires.",
  },
  {
    num: '03',
    title: 'Devis & Validation',
    desc: "Nous vous soumettons un devis clair et détaillé. Aucun travail n'est lancé sans votre accord explicite.",
  },
  {
    num: '04',
    title: 'Livraison',
    desc: "Votre véhicule est prêt dans les délais convenus, avec un rapport complet des interventions réalisées.",
  },
]

export default function Process() {
  return (
    <section className="section process" id="process">
      <p className="section-label reveal">Comment ça marche</p>
      <h2 className="section-title reveal">Un processus simple,<br />une qualité irréprochable</h2>
      <div className="process-steps">
        {steps.map((step, i) => (
          <div className="process-step reveal" key={i}>
            <div className="step-num">{step.num}</div>
            <div className="step-title">{step.title}</div>
            <p className="step-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

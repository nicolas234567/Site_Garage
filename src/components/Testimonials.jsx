const testimonials = [
  {
    text: "Équipe professionnelle et honnête. Diagnostic rapide, prix juste et travail impeccable sur ma Peugeot 308. Je reviendrai sans hésiter !",
    author: "Laurent M.",
    role: "Client depuis 2019",
  },
  {
    text: "Après une mauvaise expérience dans un autre garage, j'ai découvert AutoPrecision. Transparence totale, devis respecté, voiture rendue propre. Enfin un garage de confiance.",
    author: "Sophie T.",
    role: "Cliente depuis 2021",
  },
  {
    text: "Ma voiture avait une panne mystérieuse qu'un autre garage n'avait pas réussi à trouver. Ici, problème identifié et résolu en une journée. Très impressionné par le niveau technique.",
    author: "Karim B.",
    role: "Client depuis 2022",
  },
]

export default function Testimonials() {
  return (
    <section className="section testimonials" id="avis">
      <p className="section-label reveal">Ce qu'ils disent</p>
      <h2 className="section-title reveal">Avis clients</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div className="testimonial-card reveal" key={i}>
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">{t.author}</div>
            <div className="testimonial-role">{t.role}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

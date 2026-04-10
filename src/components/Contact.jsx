import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      e.target.reset()
    }, 3500)
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-info">
        <p className="section-label">Nous contacter</p>
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>Prenez<br />rendez-vous</h2>
        <p className="section-sub">Notre équipe vous répond dans les meilleurs délais. Devis gratuit et sans engagement.</p>
        <div className="contact-detail">
          <div className="contact-detail-text">
            <div className="contact-detail-label">Adresse</div>
            12 Rue de la Mécanique<br />75011 Paris
          </div>
        </div>
        <div className="contact-detail">
          <div className="contact-detail-text">
            <div className="contact-detail-label">Téléphone</div>
            01 42 87 65 43
          </div>
        </div>
        <div className="contact-detail">
          <div className="contact-detail-text">
            <div className="contact-detail-label">Email</div>
            contact@autoprecision.fr
          </div>
        </div>
        <div className="contact-detail">
          <div className="contact-detail-text">
            <div className="contact-detail-label">Horaires</div>
            Lun–Ven : 8h00–19h00<br />Samedi : 9h00–17h00
          </div>
        </div>
      </div>

      <div className="contact-form">
        <p className="section-label reveal">Formulaire</p>
        <h2 className="section-title reveal" style={{ marginBottom: '2rem' }}>Votre demande</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Prénom</label>
              <input type="text" placeholder="Jean" required />
            </div>
            <div className="form-group">
              <label>Nom</label>
              <input type="text" placeholder="Dupont" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Téléphone</label>
              <input type="tel" placeholder="06 00 00 00 00" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="jean@email.fr" required />
            </div>
          </div>
          <div className="form-group">
            <label>Service souhaité</label>
            <select>
              <option value="">Choisir un service…</option>
              <option>Mécanique générale</option>
              <option>Carrosserie &amp; Peinture</option>
              <option>Diagnostic électronique</option>
              <option>Freinage &amp; Suspension</option>
              <option>Climatisation</option>
              <option>Révision &amp; Entretien</option>
              <option>Autre</option>
            </select>
          </div>
          <div className="form-group">
            <label>Marque &amp; Modèle du véhicule</label>
            <input type="text" placeholder="Ex : Renault Clio IV 2018" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Décrivez votre problème ou votre demande…"></textarea>
          </div>
          <button
            type="submit"
            className="form-submit"
            style={submitted ? { background: '#1a8f3f', transform: 'none' } : {}}
          >
            {submitted ? '✓ Demande envoyée !' : 'Envoyer ma demande →'}
          </button>
        </form>
      </div>
    </section>
  )
}

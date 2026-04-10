# AutoPrecision — Site Vitrine Garage Automobile

## Installation & lancement

```bash
npm install
npm run dev
```

Build de production :

```bash
npm run build
npm run preview
```

---

## Stack technique

- **React 18** — composants fonctionnels
- **Vite** — bundler et dev server
- **CSS vanilla** — styles dans `src/index.css` (aucune dépendance CSS externe)

---

## Structure des fichiers

```
Site_Garage/
├── index.html                ← Entry point Vite
├── package.json
├── vite.config.js
├── public/
│   └── img/
│       ├── about.jpg             ← Photo de l'atelier
│       ├── pistolet_peinture.png ← Icône service Carrosserie & Peinture
│       └── disque_frein.png      ← Icône service Freinage & Suspension
└── src/
    ├── main.jsx              ← createRoot, import CSS global
    ├── App.jsx               ← Composition + IntersectionObserver (scroll reveal)
    ├── index.css             ← Tous les styles (nav, hero, grille, formulaire, footer)
    └── components/
        ├── Nav.jsx           ← Effet nav au scroll + menu hamburger mobile
        ├── Hero.jsx          ← Section hero avec stats
        ├── Services.jsx      ← Grille 6 services
        ├── About.jsx         ← Section histoire du garage
        ├── Process.jsx       ← 4 étapes du parcours client
        ├── Testimonials.jsx  ← 3 avis clients
        ├── Contact.jsx       ← Coordonnées + formulaire avec feedback
        └── Footer.jsx        ← Liens et mentions légales
```

---

## Sections de la page

| Section | Contenu |
|---|---|
| **Navbar** | Logo, liens de navigation, CTA "Prendre RDV" |
| **Hero** | Accroche + stats (25 ans, 4k clients, 98% satisfaction) |
| **Services** | 6 cartes : Mécanique, Carrosserie, Diagnostic, Freinage, Climatisation, Révision |
| **À propos** | Histoire du garage fondé en 1998 par Michel Durand |
| **Process** | 4 étapes : Prise de RDV → Diagnostic → Devis → Livraison |
| **Avis clients** | 3 témoignages clients |
| **Contact** | Coordonnées + formulaire de demande de rendez-vous |
| **Footer** | Liens et mentions légales |

---

## Comportements interactifs

- **Scroll reveal** — `IntersectionObserver` dans `App.jsx`, applique `.visible` sur les éléments `.reveal`
- **Stagger** — délai progressif sur les cartes des grilles (services, process, avis)
- **Effet nav** — fond plus opaque après 60px de scroll (`Nav.jsx`)
- **Menu hamburger** — toggle mobile via `useState` (`Nav.jsx`)
- **Formulaire** — feedback visuel vert à l'envoi, reset après 3,5s (`Contact.jsx`)

---

## Personnalisation rapide

- **Services** : tableau `services` dans `src/components/Services.jsx`
- **Témoignages** : tableau `testimonials` dans `src/components/Testimonials.jsx`
- **Étapes process** : tableau `steps` dans `src/components/Process.jsx`
- **Coordonnées** : directement dans `src/components/Contact.jsx`
- **Couleurs** : variables CSS dans `src/index.css` (`:root`)
- **Images** : remplacer les fichiers dans `public/img/`

---

Créé par [Nicolas Bregevin](https://nicolasbregevin.netlify.app/)

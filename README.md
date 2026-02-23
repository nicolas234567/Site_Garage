# AutoPrecision — Site Vitrine Garage Automobile

## Installation & lancement

Ouvrir directement `index.html` dans un navigateur, ou via un serveur local :

## Stack technique

- **HTML / CSS / JS** — site statique, zéro dépendance
- **CSS custom** — styles dans `css/style.css`
- **JS vanilla** — scroll reveal, menu mobile, formulaire dans `js/main.js`

---

## Structure des fichiers

```
garage-site/
├── index.html                ← Page principale (composition complète)
├── css/
│   └── style.css             ← Tous les styles (nav, hero, grille, formulaire, footer)
├── js/
│   └── main.js               ← Scroll reveal (.reveal), menu mobile, submitForm()
└── img/
    ├── hero.jpg              ← Image de fond du hero
    ├── about.jpg             ← Photo de l'atelier
    ├── pistolet_peinture.png ← Icône service Carrosserie & Peinture
    └── disque_frein.png      ← Icône service Freinage & Suspension
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

## Personnalisation rapide

- **Services** : cartes dans `index.html` section `#services`
- **Témoignages** : cartes dans `index.html` section `#avis`
- **Coordonnées** : adresse, téléphone, email, horaires dans `index.html` section `#contact`
- **Couleurs** : variables CSS dans `css/style.css`
- **Images** : remplacer les fichiers dans `img/`

---

Créé par [Nicolas Bregevin](https://nicolasbregevin.netlify.app/)

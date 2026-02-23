# AutoPrecision — Site Garagiste

Site HTML / CSS / JS pour un garage automobile.
Formulaire non fonctionnel car site exemple

## Structure du projet

```
garage-site/
├── index.html              
├── css/
│   └── style.css          
├── js/
│   └── main.js             
└── img/
    ├── hero.jpg           
    ├── about.jpg          
    ├── pistolet_peinture.png 
    └── disque_frein.png   
```

## Contenu de la page

La page `index.html` comprend les sections suivantes :

- **Nav** — Logo, liens de navigation et CTA "Prendre RDV"
- **Hero** — Accroche principale avec statistiques (25 ans, 4k clients, 98% satisfaction)
- **Services** — 6 cartes : Mécanique générale, Carrosserie & Peinture, Diagnostic électronique, Freinage & Suspension, Climatisation, Révision & Entretien
- **À propos** — Histoire du garage fondé en 1998 par Michel Durand
- **Process** — 4 étapes : Prise de RDV → Diagnostic → Devis & Validation → Livraison
- **Avis clients** — 3 témoignages (Laurent M., Sophie T., Karim B.)
- **Contact** — Coordonnées + formulaire de demande de rendez-vous
- **Footer** — Liens et mentions légales

## Images

Les images sont référencées depuis le dossier `img/`.  
Pour le développement rapide, vous pouvez utiliser des URLs Unsplash directement dans `css/style.css` et `index.html` :

- **Hero** : `https://images.unsplash.com/photo-1632823471565-1ecdf5c6da3e?w=1600&q=80`
- **About** : `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80`

## Fichiers manquants

Pour que le site soit fonctionnel, il reste à créer :

1. `css/style.css` — styles complets (nav, hero, grille de services, formulaire, footer…)
2. `js/main.js` — logique JS (scroll reveal sur les éléments `.reveal`, menu mobile, fonction `submitForm()`)
3. Les images dans `img/`

## Lancer le site

Ouvrez simplement `index.html` dans un navigateur, ou utilisez un serveur local :

```bash
# Python
python -m http.server 8000

# Node.js (npx)
npx serve .
```

---

Créé par [Nicolas Bregevin](https://nicolasbregevin.netlify.app/)

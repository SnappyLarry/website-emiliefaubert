# CONTEXT.md — Site web Émilie Faubert

> Contexte de continuité pour le développement du **site web**.
> **Source de vérité branding** : repo voisin `branding-emiliefaubert` (`BRANDING.md`, `SESSION.md`).
> Ce repo (`website-emiliefaubert`) contient le **site** ; on y crée tous les nouveaux fichiers.

---

## Le projet

**Émilie Faubert** — consultante RH sénior indépendante (depuis janvier 2026).
Coaching exécutif + conseil RH stratégique. 15+ ans en environnements créatifs/tech à forte
croissance (10+ ans chez Moment Factory : HR Advisor → Senior Director Talent & Global Mobility).

**Services** : Executive Coaching · HR Consulting · Change Management · Leadership Development ·
Management Consulting · Mobilité internationale & immigration · **Fractional Head of HR**.

**Mission** : aider les leaders à clarifier leur vision, aligner leurs ambitions à un engagement
global fort, et faire évoluer leur culture — en mettant l'humain à l'avant-plan.

**Cible** : CEO/fondateurs, VP RH/Directeurs Talent, équipes de direction en **industries
créatives ET technologiques uniquement**. Explicitement **pas** de gros corpo gris.

**3 piliers de marque** : Bienveillance · Authenticité · Collaboration.

---

## Identité de marque (figée ✅)

### Palette — *Conifère & Framboise*

| Rôle | Nom | Hex |
|---|---|---|
| Principal | Conifère | `#2D4C3A` |
| Accent | Framboise | `#FA608D` |
| Texte | Ardoise | `#2C2E2B` |
| Fond | Blanc cassé | `#F8F4ED` |
| Subtil | Lichen | `#A9B5A0` |

### Typographie
- **Titres** : Cormorant Garamond, weight **500** (serif raffiné)
- **Corps** : Inter Tight (weights 300/400/500)
- **Règle d'or** : **PAS d'italique**. Emphase via poids de typo ou couleur Conifère/Framboise.

### Copy
- **Tagline** : « Une partenaire pour les leaders d'industries créatives et technologiques. »
- **Slogan favori** : « Ce qu'on fait ensemble »
- **Ton** : posé, chaleureux, sans hype. Phrases courtes. « on » plutôt que « nous » corporate.
- Pas de jargon RH corpo, pas de superlatifs vides.

### Territoire visuel
Outdoor / utility / quiet luxury (Patagonia, Arc'teryx, Aritzia, Uniqlo, Volvo, Subaru).
Beaucoup de blanc/respiration, photos de matière (textile, bois, lumière naturelle), pas de stock
corpo. Calme, robuste, soigné.

### Sites de référence
Gentilhomme · Margarita Garden · Vanessa Ribreau · Supply & Demand · DPT · Strategic Sourcing · Sourcing Unicorns.

---

## Logo (⏳ direction posée, cadre à départager par Émilie)

- **Wordmark** : `É [fleur] F` — fleur entre les deux lettres.
- **Fleur** : extraite du tatouage personnel d'Émilie (`flower-extracted.png` dans le repo branding),
  affichée via `mask-image` pour prendre `currentColor`. **Pas une SVG dessinée à la main.**
- **Sous-ligne** : « ÉMILIE FAUBERT » en Inter Tight 500, uppercase, letter-spacing `.25em`, opacité `.85`.
- **Initiales** : Cormorant Garamond 500, letter-spacing `.05em`.
- **En attente** : cadre **simple** (rectangle complet 1px) vs **ouvert** (filets haut/bas seulement).
- Couleur logo = adaptée au fond (Conifère sur clair, Blanc cassé sur Conifère, Conifère sur Framboise).

---

## Directives techniques du site

- **Type** : site statique single-page, navigation par ancres (pas de framework, pas de CMS).
- **Layout** : mobile-first.
- **Bilingue FR/EN** : toggle persisté en `localStorage`, strings via `data-i18n` + objet
  `translations` dans `js/main.js` (pattern repris de `website-weops`).
- **Fonts** : Cormorant Garamond + Inter Tight (via Google Fonts ou self-hosted).
- **Hébergement** : TBD.

### Structure visée
```
index.html          point d'entrée single-page
css/style.css       styles — CSS custom properties, mobile-first
js/main.js          toggle langue, scroll nav, menu mobile
assets/fonts/       polices
assets/img/         logos et images
```

---

## Garde-fous (approches écartées — NE PAS re-proposer)

- ❌ Pictogrammes / marks graphiques autonomes
- ❌ Formes organiques dessinées à la main par Claude (jugées « phalliques »)
- ❌ Arrowheads / coins fléchés
- ❌ Lignes décoratives ondulées dans le logo
- ❌ Italique typographique
- ❌ Positionnement cabinet RH corpo gris
- ✅ **Itérer par petits pas** — toujours proposer plusieurs options en parallèle.

---

## État du repo & prochaines étapes

- Repo `website-emiliefaubert` : quasi vide (README + ce CONTEXT.md). Site **à démarrer**.
- **Sections à définir/valider avant de coder.**
- TODO pré-déploiement : la fleur est embarquée en base64 dans le branding (workaround `file://`) ;
  au déploiement HTTP, repasser à `mask-image: url('assets/img/flower-extracted.png')`.

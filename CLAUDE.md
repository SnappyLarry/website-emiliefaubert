# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Avant toute autre chose : lire [CONTEXT.md](CONTEXT.md)** — contexte de continuité, brief d'Émilie,
> décisions de branding, garde-fous.
> **Source de vérité branding** : repo voisin `branding-emiliefaubert` (`BRANDING.md`, `SESSION.md`).
> Layout calqué sur le repo voisin `website-weops`.

## Project

**Émilie Faubert** — Consultante RH sénior indépendante : coaching exécutif + conseil RH stratégique.
15+ ans en environnements créatifs/tech à forte croissance (dont 10+ ans chez Moment Factory).
Inclut le **Fractional Head of HR**.
Tagline : *« Une partenaire pour les leaders d'industries créatives et technologiques. »*
Slogan : *« Ce qu'on fait ensemble »*.

Target audiences : CEO/fondateurs · VP RH/Directeurs Talent · équipes de direction —
**industries créatives ET technologiques uniquement** (pas de gros corpo gris).

## Site directives

- **Type**: Static single-page site, anchor-based section navigation (no framework, no CMS)
- **Layout**: Mobile-first (styles de base = mobile, `@media (min-width:…)` pour élargir)
- **Language**: French primary, bilingual FR/EN — toggle persisté en `localStorage` (`ef-lang`), strings dans l'objet `translations` de `js/main.js`
- **Hosting**: TBD (domaine `www.emiliefaubert.com`)

## Structure

```
index.html          single-page entry point
css/style.css       all styles — CSS custom properties, mobile-first
js/main.js          language toggle, nav scroll state, mobile menu
assets/fonts/       (réservé — fonts via Google Fonts pour l'instant)
assets/img/         flower.png (fleur tatouage), logo, photos
docs/               brand assets (gitignored)
```

## Sections (in order — cf. gdoc « SITE WEB 2026 »)

1. **Accueil / Hero** (#accueil) — motto + tagline, CTA → #contact
2. **Parcours & expérience** (#parcours)
3. **Valeurs & approche** (#valeurs) — valeurs + pourquoi ce métier + comment je travaille
4. **Offre / expertise** (#offre) — 5 cartes
5. **Projets / clients** (#projets) — *éventuel*, commenté dans `index.html`, à activer plus tard
6. **Contact** (#contact) — formulaire (→ `hello@emiliefaubert.com`) + LinkedIn + téléphone + booking (test)

## i18n

Strings traduisibles = attribut `data-i18n="key"`. Traductions dans l'objet `translations`
de `js/main.js`. Ajouter une string = attribut dans `index.html` + entrées `fr` et `en`.
`applyLang()` utilise `innerHTML`, donc le markup inline (ex. `<a>` dans `contact.book`) est rendu.

## Brand identity

### Colors — *Conifère & Framboise*

| Rôle | Name | Hex |
|---|---|---|
| Principal | Conifère | `#2D4C3A` |
| Accent | Framboise | `#FA608D` |
| Texte | Ardoise | `#2C2E2B` |
| Fond | Blanc cassé | `#F8F4ED` |
| Subtil | Lichen | `#A9B5A0` |

### Typography
- Titres : **Cormorant Garamond** 500 · Corps : **Inter Tight** (300/400/500) — via Google Fonts
- **Règle d'or : PAS d'italique.** Emphase via poids ou couleur Conifère/Framboise.

### Logo — wordmark `É[fleur]F`, **cadre ouvert** (filets haut/bas) ✅ choisi par Émilie
- `.logo__mark` : Cormorant Garamond 500, `border-top`/`border-bottom` 1px `currentColor`.
- `.logo__flower` : fleur tatouage (`assets/img/flower.png`) en `mask` → prend `currentColor`.
- **Note** : `mask: url(...)` casse en `file://` (CORS Chromium) → servir en HTTP pour tester :
  `python3 -m http.server` puis http://localhost:8000.

## À brancher (TODO fonctionnel)
- **Formulaire** → service tiers (Formspree / Web3Forms) pointant sur `hello@emiliefaubert.com` (`action` du `<form id="contactForm">`).
- **Booking** (test) → lien Calendly / Cal.com dans `contact.book` (à retirer si « trop random »).
- **Téléphone** → remplacer le placeholder `+1 (000) 000-0000`.
- **Photos** d'Émilie + photos nature (arbres/fleurs) à intégrer.

## Garde-fous (NE PAS re-proposer)
❌ pictos/marks autonomes · ❌ formes organiques dessinées main · ❌ arrowheads · ❌ italique ·
❌ positionnement corpo gris. ✅ Itérer par petits pas, plusieurs options en parallèle.

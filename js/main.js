const translations = {
  fr: {
    'nav.parcours': 'Parcours',
    'nav.valeurs':  'Valeurs',
    'nav.offre':    'Offre',
    'nav.contact':  'Contact',

    'hero.label': 'Coaching exécutif · Conseil RH stratégique',
    'hero.title': 'Ce qu\'on fait<br>ensemble.',
    'hero.sub':   'Une partenaire pour les leaders d\'industries créatives et technologiques.',
    'hero.cta':   'Travaillons ensemble',

    'parcours.title': 'Parcours & expérience',
    'parcours.lead':  '15+ ans en ressources humaines dans des environnements créatifs et technologiques à forte croissance, dont plus de 10 ans chez Moment Factory.',
    'parcours.body':  'D\'Advisor RH à Senior Director, Talent & Global Mobility — j\'ai accompagné des équipes en croissance rapide, des transformations de culture et des projets de mobilité internationale. Aujourd\'hui indépendante, je mets cette expérience au service des leaders qui bâtissent.',

    'valeurs.title': 'Valeurs & approche',
    'valeurs.intro': 'Pourquoi je fais ce métier, et comment je travaille — l\'humain d\'abord, toujours.',
    'valeurs.bienveillance.title': 'Bienveillance',
    'valeurs.bienveillance.body':  'Des transformations menées avec respect. Des personnes qui se sentent vues, même dans les moments difficiles.',
    'valeurs.authenticite.title':  'Authenticité',
    'valeurs.authenticite.body':   'Des stratégies concrètes, adaptées au besoin réel. Pas de jargon, pas de livrables génériques.',
    'valeurs.collaboration.title': 'Collaboration',
    'valeurs.collaboration.body':  'Des solutions co-construites avec vos équipes. Un transfert d\'expertise qui vous rend autonomes après le mandat.',

    'offre.title': 'Mon offre',
    'offre.coaching.title':       'Coaching exécutif',
    'offre.coaching.body':        'Accompagnement des leaders : posture, alignement, prise de décision.',
    'offre.conseil.title':        'Conseil RH stratégique',
    'offre.conseil.body':         'Gestion des talents, performance, culture, structures RH adaptées à votre réalité.',
    'offre.transformation.title': 'Transformation & changement',
    'offre.transformation.body':  'Croissance, décroissance, transitions — menées avec méthode et humanité.',
    'offre.mobilite.title':       'Mobilité internationale',
    'offre.mobilite.body':        'Stratégie, immigration, parcours d\'expatriation traités comme une expérience humaine.',
    'offre.fractional.title':     'Fractional Head of HR',
    'offre.fractional.body':      'Un rôle RH stratégique à temps partagé, pour les organisations sans VP RH à temps plein.',

    'contact.title': 'Travaillons ensemble',
    'contact.sub':   'Parlez-moi brièvement de votre besoin et de votre projet — j\'aurai de quoi préparer notre premier appel.',
    'contact.form.name':    'Nom',
    'contact.form.email':   'Courriel',
    'contact.form.message': 'Votre besoin / projet',
    'contact.form.submit':  'Envoyer',
    'contact.phone': '+1 (000) 000-0000',
    'contact.book':  'Vous préférez réserver directement ? <a href="#">Choisir un créneau</a>',

    'footer.copy': '© 2026 Émilie Faubert. Tous droits réservés.',
  },
  en: {
    'nav.parcours': 'Background',
    'nav.valeurs':  'Values',
    'nav.offre':    'Services',
    'nav.contact':  'Contact',

    'hero.label': 'Executive coaching · Strategic HR consulting',
    'hero.title': 'What we build<br>together.',
    'hero.sub':   'A partner for leaders in creative and technology industries.',
    'hero.cta':   'Let\'s work together',

    'parcours.title': 'Background & experience',
    'parcours.lead':  '15+ years in HR within fast-growing creative and technology environments, including 10+ years at Moment Factory.',
    'parcours.body':  'From HR Advisor to Senior Director, Talent & Global Mobility — I\'ve supported fast-scaling teams, culture transformations and international mobility projects. Now independent, I put that experience to work for the leaders who are building.',

    'valeurs.title': 'Values & approach',
    'valeurs.intro': 'Why I do this work, and how I work — people first, always.',
    'valeurs.bienveillance.title': 'Care',
    'valeurs.bienveillance.body':  'Transformations led with respect. People who feel seen, even through the hard moments.',
    'valeurs.authenticite.title':  'Authenticity',
    'valeurs.authenticite.body':   'Concrete strategies, tailored to the real need. No jargon, no generic deliverables.',
    'valeurs.collaboration.title': 'Collaboration',
    'valeurs.collaboration.body':  'Solutions co-built with your teams. A transfer of expertise that leaves you autonomous after the engagement.',

    'offre.title': 'What I offer',
    'offre.coaching.title':       'Executive coaching',
    'offre.coaching.body':        'Supporting leaders: presence, alignment, decision-making.',
    'offre.conseil.title':        'Strategic HR consulting',
    'offre.conseil.body':         'Talent management, performance, culture, HR structures fit to your reality.',
    'offre.transformation.title': 'Transformation & change',
    'offre.transformation.body':  'Growth, downsizing, transitions — led with method and humanity.',
    'offre.mobilite.title':       'International mobility',
    'offre.mobilite.body':        'Strategy, immigration, relocation paths treated as a human experience.',
    'offre.fractional.title':     'Fractional Head of HR',
    'offre.fractional.body':      'A strategic, part-time HR role for organizations without a full-time VP of HR.',

    'contact.title': 'Let\'s work together',
    'contact.sub':   'Tell me briefly about your need and your project — I\'ll have what I need to prepare our first call.',
    'contact.form.name':    'Name',
    'contact.form.email':   'Email',
    'contact.form.message': 'Your need / project',
    'contact.form.submit':  'Send',
    'contact.phone': '+1 (000) 000-0000',
    'contact.book':  'Prefer to book directly? <a href="#">Pick a time slot</a>',

    'footer.copy': '© 2026 Émilie Faubert. All rights reserved.',
  }
};

let lang = localStorage.getItem('ef-lang') || 'fr';

function applyLang() {
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.getElementById('langToggle').textContent = lang === 'fr' ? 'EN' : 'FR';
  localStorage.setItem('ef-lang', lang);
}

document.getElementById('langToggle').addEventListener('click', () => {
  lang = lang === 'fr' ? 'en' : 'fr';
  applyLang();
});

// Nav scroll state
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Mobile menu
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  const open = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', String(!open));
  navLinks.classList.toggle('open', !open);
  nav.classList.toggle('menu-open', !open);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    burger.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('open');
    nav.classList.remove('menu-open');
  });
});

applyLang();

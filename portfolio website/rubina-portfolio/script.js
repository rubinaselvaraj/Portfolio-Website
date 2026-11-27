/* ==========================================================================
   Rubina Selvaraj — Portfolio
   script.js (vanilla JavaScript, no libraries)

   Contents
   1.  SITE SETTINGS   <- edit your email and form service here
   2.  PROJECT DATA    <- edit / add your projects here
   3.  Small helpers
   4.  Header, mobile menu and active link
   5.  Scroll reveal
   6.  Portfolio gallery + filters
   7.  Project detail modal
   8.  Contact form validation and sending
   9.  Back-to-top button and footer year
   ========================================================================== */

(function () {
  'use strict';

  /* =======================================================================
     1. SITE SETTINGS
     ======================================================================= */
  const SETTINGS = {
    // Your real email address. It is used by the contact form fallback.
    contactEmail: 'selvarajrubina@gmail.com',

    // Paste your form service endpoint here (for example a Formspree URL such as
    // 'https://formspree.io/f/xxxxxxx'). See the README, "Connect the contact form".
    // While this is empty the form opens the visitor's email app instead of sending.
    formEndpoint: ''
  };


  /* =======================================================================
     2. PROJECT DATA
     -----------------------------------------------------------------------
     Every card in the gallery and every case study in the modal comes from
     this list. To use your own work:
       - Put your images in assets/projects/ and change the `src` paths below.
       - Set `w` and `h` to the image's real pixel size (this prevents layout jumps).
       - Rewrite the text, then delete `placeholder: true` from that project
         so the "sample layout" note disappears.
     `group` is either 'ui' or 'graphic'. `category` is the small filter label.
     ======================================================================= */

  // Guidance text shown in the sample case studies. Replace it with your own words.
  const GUIDE = {
    problem: 'Describe the challenge this design needed to solve, and who it was for.',
    objectives: [
      'State the first goal of the project.',
      'State the second goal of the project.',
      'State how you would know the design worked.'
    ],
    research: 'Explain how you prepared: what you looked at, who or what influenced the direction, and what you learned.',
    decisions: [
      'Describe one important choice (for example type, color or layout) and why you made it.',
      'Describe a second choice and the alternative you decided against.'
    ],
    takeaways: [
      'Write what this project taught you.',
      'Write what you would do differently or explore next.'
    ]
  };

  const img = (slug, n, caption) => ({
    src: `assets/projects/${slug}-${n}.svg`,
    w: 1600,
    h: 1000,
    alt: `${caption} (placeholder image, replace with your design)`,
    caption: caption
  });

  /* Builds a graphic design project with the shared placeholder structure */
  function graphic(slug, category, title, w, h, overview) {
    return {
      id: slug,
      group: 'graphic',
      category: category,
      title: title,
      cover: { src: `assets/projects/${slug}-cover.svg`, w: w, h: h, alt: `${title} (placeholder image, replace with your design)` },
      overview: overview,
      problem: GUIDE.problem,
      objectives: GUIDE.objectives,
      research: GUIDE.research,
      process: [
        { title: 'Brief and references', text: 'Collect the requirements and visual references for the piece.' },
        { title: 'Concepts and sketches', text: 'Explore a few directions on paper or in rough layouts.' },
        { title: 'Design and refine', text: 'Build the chosen direction and refine type, color and spacing.' },
        { title: 'Final files', text: 'Prepare the finished designs for print or screen.' }
      ],
      decisions: GUIDE.decisions,
      gallery: [img(slug, 1, `${title}, view 1`), img(slug, 2, `${title}, view 2`)],
      takeaways: GUIDE.takeaways,
      placeholder: true
    };
  }

  const PROJECTS = [
    /* ---------- A. UI/UX design ---------- */
    {
      id: 'wedding-planner-app',
      group: 'ui',
      category: 'Mobile app',
      title: 'Wedding Planner Mobile App',
      cover: { src: 'assets/projects/cover.png', w: 1200, h: 1500, alt: 'Wedding Planner mobile app screens' },
      overview: 'A wedding planning application designed to simplify wedding arrangements for couples.',
      features: ['Venue Discovery', 'Vendor Booking', 'Budget Management', 'Guest Management', 'Wedding Checklist', 'Booking Management'],
      problem: 'Planning a wedding means keeping track of venues, vendors, budgets, guests and dozens of tasks, often across separate apps, notes and chats. This app brings those arrangements into one place.',
      objectives: [
        'Help couples discover venues and book vendors in one flow.',
        'Make budgets, guest lists and checklists simple to manage.',
        'Keep every booking visible and easy to follow up.'
      ],
      research: 'Add a short summary of your user research and competitor analysis here: who you spoke to, which apps you reviewed and what you learned from them.',
      process: [
        { title: 'User Research', text: 'Understanding what couples need while planning a wedding.' },
        { title: 'Competitor Analysis', text: 'Reviewing existing wedding planning apps to find gaps and opportunities.' },
        { title: 'User Persona', text: 'Turning research into a representative planning couple.' },
        { title: 'Empathy Mapping', text: 'Capturing what the user thinks, feels, says and does.' },
        { title: 'User Journey', text: 'Mapping the experience from the first idea to the wedding day.' },
        { title: 'Wireframing', text: 'Sketching the structure and flow of each screen.' },
        { title: 'High-Fidelity UI Design', text: 'Applying color, type and components to build the final screens.' },
        { title: 'Prototyping', text: 'Linking the screens into a clickable flow to test the experience.' }
      ],
      decisions: [
        'Add a key design decision here, such as how the navigation or checklist is organised, and why.',
        'Add a second decision, such as the color or type choices, and the reasoning behind them.'
      ],
      gallery: [
  {
    src: 'assets/projects/onboarding.png',
    alt: 'Onboarding and home screens',
    caption: 'Onboarding screens'
  },
  {
    src: 'assets/projects/vendors.png',
    alt: 'Venue and vendor discovery',
    caption: 'Venue and vendor discovery'
  },
  {
    src: 'assets/projects/guest.png',
    alt: 'Budget and guest management',
    caption: 'Guest management'
  },
  {
    src: 'assets/projects/checklist.png',
    alt: 'Checklist and booking management',
    caption: 'Checklist and budget management'
  },
  {
    src: 'assets/projects/booking.png',
    alt: 'Checklist and booking management',
    caption: 'Checklist and budget management'
  },{
    src: 'assets/projects/checklist.png',
    alt: 'Checklist and booking management',
    caption: 'Checklist and budget management'
  }
],
takeaways: GUIDE.takeaways,
placeholder: false
    },
    {
      id: 'website-ui-design',
      group: 'ui',
      category: 'Website',
      title: 'Website UI Design',
      cover: { src: 'assets/projects/website-ui-design-cover.svg', w: 1600, h: 1200, alt: 'Website UI design layouts (placeholder image, replace with your designs)' },
      overview: 'A showcase of website layouts, landing pages, dashboards and responsive interfaces.',
      problem: GUIDE.problem,
      objectives: GUIDE.objectives,
      research: GUIDE.research,
      process: [
        { title: 'Content and goals', text: 'Define what the site must say and what visitors should do.' },
        { title: 'Wireframes', text: 'Plan the page structure for desktop, tablet and mobile.' },
        { title: 'Visual design', text: 'Apply typography, color and imagery to the wireframes.' },
        { title: 'Responsive layouts', text: 'Adapt the design across screen sizes.' }
      ],
      decisions: GUIDE.decisions,
      gallery: [
  {
    src: 'assets/projects/dashboard.png',
    alt: 'Onboarding and home screens',
    caption: 'Landing page'
  },
  {
    src: 'assets/projects/toolkit.png',
    alt: 'Venue and vendor discovery',
    caption: 'Wedding toolkit'
  },
  {
    src: 'assets/projects/howitworks.png',
    alt: 'Budget and guest management',
    caption: 'How it Works'
  },
  {
    src: 'assets/projects/explorevendors.png',
    alt: 'Checklist and booking management',
    caption: 'Explore Vendors'
  },
  {
    src: 'assets/projects/inspiration.png',
    alt: 'Checklist and booking management',
    caption: 'Inspiration Gallery'
  },{
    src: 'assets/projects/tips&trends.png',
    alt: 'Checklist and booking management',
    caption: 'Tips & Trends of Wedding Planner'
  },
  {
    src: 'assets/projects/review.png',
    alt: 'Checklist and booking management',
    caption: 'Reviews of Customers'
  }
],
takeaways: GUIDE.takeaways,
placeholder: false
    },

    /* ---------- B. Graphic design ---------- */
    graphic('social-media-posters', 'Social Media Posters', 'Social media posters', 1200, 1200, 'A set of social media posters designed to look consistent across a feed.'),
    graphic('festival-posters', 'Festival Posters', 'Festival posters', 1200, 1600, 'Posters created for festival greetings and celebrations.'),
    graphic('brand-identity', 'Brand Identity', 'Brand identity', 1600, 1200, 'A brand identity covering logo, color, typography and applications.'),
    graphic('logo-design', 'Logo Design', 'Logo design', 1200, 1200, 'Logo concepts and final marks, shown on their own and in use.'),
    graphic('product-manipulation', 'Product Manipulation', 'Product manipulation', 1200, 1500, 'Photo manipulation that places products into creative scenes.'),
    
  ];

  const GROUP_LABELS = { ui: 'UI/UX Design', graphic: 'Graphic Design' };


  /* =======================================================================
     3. Small helpers
     ======================================================================= */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Escapes text before it goes into an HTML string
  function esc(value) {
    return String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  const body = document.body;
  const header = $('.site-header');
  const nav = $('#site-nav');
  const menuToggle = $('.menu-toggle');


  /* =======================================================================
     4. Header, mobile menu and active link
     ======================================================================= */
  // Adds a border to the sticky header once the page has scrolled
  function onScrollHeader() {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }

  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    body.classList.toggle('scroll-lock', open);
  }

  menuToggle.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));

  // Close the menu after choosing a link
  $$('a', nav).forEach((a) => a.addEventListener('click', () => setMenu(false)));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      setMenu(false);
      menuToggle.focus();
    }
  });

  // Reset the menu if the window grows past the mobile breakpoint
  window.matchMedia('(min-width: 881px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });

  // Highlight the nav link for the section currently in view
  const navLinks = $$('[data-nav]');
  const sectionToNav = { experience: 'skills' }; // Experience sits under the Skills link
  if ('IntersectionObserver' in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = sectionToNav[entry.target.id] || entry.target.id;
        navLinks.forEach((link) => {
          const active = link.getAttribute('href') === '#' + id;
          link.classList.toggle('is-active', active);
          if (active) link.setAttribute('aria-current', 'true'); else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $$('main > section[id]').forEach((s) => spy.observe(s));
  }


  /* =======================================================================
     5. Scroll reveal
     ======================================================================= */
  const revealEls = $$('[data-reveal]');
  if ('IntersectionObserver' in window && !prefersReducedMotion.matches) {
    const reveal = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach((el) => reveal.observe(el));
  } else {
    // No observer or reduced motion: show everything straight away
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }


  /* =======================================================================
     6. Portfolio gallery + filters
     ======================================================================= */
  const gallery = $('#gallery');
  const groupRow = $('#filter-groups');
  const categoryRow = $('#filter-categories');
  const filterStatus = $('#filter-status');

  const filter = { group: 'all', category: 'all' };

  function renderCards() {
    const html = PROJECTS.map((p) => `
      <button class="card" type="button" data-id="${esc(p.id)}" data-group="${esc(p.group)}" data-category="${esc(p.category)}" aria-haspopup="dialog">
        <span class="card-media">
          <img src="${esc(p.cover.src)}" width="${p.cover.w}" height="${p.cover.h}" alt="${esc(p.cover.alt)}" loading="lazy" decoding="async">
          <span class="card-view" aria-hidden="true">View project</span>
        </span>
        <span class="card-meta">
          <span class="card-title">${esc(p.title)}</span>
          <span class="card-cat">${esc(GROUP_LABELS[p.group])} · ${esc(p.category)}</span>
        </span>
      </button>`).join('');
    gallery.innerHTML = html;
  }

  // Builds the second row of category chips for the chosen group
  function renderCategoryChips() {
    if (filter.group === 'all') {
      categoryRow.hidden = true;
      categoryRow.innerHTML = '';
      return;
    }
    const cats = [...new Set(PROJECTS.filter((p) => p.group === filter.group).map((p) => p.category))];
    const chips = ['all', ...cats].map((c) => {
      const active = filter.category === c;
      const label = c === 'all' ? `All ${GROUP_LABELS[filter.group]}` : c;
      return `<button class="chip${active ? ' is-active' : ''}" type="button" data-category="${esc(c)}" aria-pressed="${active}">${esc(label)}</button>`;
    });
    categoryRow.innerHTML = chips.join('');
    categoryRow.hidden = false;
  }

  function matchesFilter(p) {
    if (filter.group !== 'all' && p.group !== filter.group) return false;
    if (filter.category !== 'all' && p.category !== filter.category) return false;
    return true;
  }

  function applyFilter() {
    let count = 0;
    $$('.card', gallery).forEach((card) => {
      const project = PROJECTS.find((p) => p.id === card.dataset.id);
      const show = matchesFilter(project);
      card.hidden = !show;
      if (show) count += 1;
    });
    filterStatus.textContent = `Showing ${count} ${count === 1 ? 'project' : 'projects'}`;
  }

  groupRow.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-group]');
    if (!btn) return;
    filter.group = btn.dataset.group;
    filter.category = 'all';
    $$('.chip', groupRow).forEach((c) => {
      const on = c === btn;
      c.classList.toggle('is-active', on);
      c.setAttribute('aria-pressed', String(on));
    });
    renderCategoryChips();
    applyFilter();
  });

  categoryRow.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-category]');
    if (!btn) return;
    filter.category = btn.dataset.category;
    renderCategoryChips();
    applyFilter();
    // Keep keyboard focus on the chip that was chosen after the row re-renders
    const again = $(`[data-category="${CSS.escape(filter.category)}"]`, categoryRow);
    if (again) again.focus();
  });

  gallery.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (card) openProject(card.dataset.id);
  });

  renderCards();
  applyFilter();


  /* =======================================================================
     7. Project detail modal (uses the native <dialog> element, which
        provides focus trapping, Esc to close and a backdrop for free)
     ======================================================================= */
  const modal = $('#project-modal');
  const modalContent = $('#pm-content');
  const modalScroll = $('#pm-scroll');
  let currentId = null;

  const list = (items) => `<ul class="bullets">${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`;

  function section(title, inner) {
    return `<section class="pm-section"><h3>${esc(title)}</h3><div class="pm-text">${inner}</div></section>`;
  }

  // Reusable case study layout: every project is rendered with this template
  function renderProject(p) {
    const features = p.features ? `<ul class="tags" aria-label="Features">${p.features.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>` : '';
    const steps = `<ol class="steps">${p.process.map((s) => `<li><strong>${esc(s.title)}</strong><p>${esc(s.text)}</p></li>`).join('')}</ol>`;
    const galleryHtml = `<div class="pm-gallery">${p.gallery.map((g) => `
        <figure>
          <img src="${esc(g.src)}" width="${g.w}" height="${g.h}" alt="${esc(g.alt)}" loading="lazy" decoding="async">
          <figcaption>${esc(g.caption)}</figcaption>
        </figure>`).join('')}</div>`;

    modalContent.innerHTML = `
      <p class="pm-category">${esc(GROUP_LABELS[p.group])} · ${esc(p.category)}</p>
      <h2 class="pm-title" id="pm-title">${esc(p.title)}</h2>
      ${p.placeholder ? '<p class="pm-notice">Sample layout. Replace the images and text with your own project.</p>' : ''}
      <div class="pm-hero">
        <img src="${esc(p.cover.src)}" width="${p.cover.w}" height="${p.cover.h}" alt="${esc(p.cover.alt)}">
      </div>
      ${section('Project overview', `<p>${esc(p.overview)}</p>${features}`)}
      ${section('Problem statement', `<p>${esc(p.problem)}</p>`)}
      ${section('Project objectives', list(p.objectives))}
      ${section('Research and analysis', `<p>${esc(p.research)}</p>`)}
      <section class="pm-section"><h3>Design process</h3>${steps}</section>
      ${section('Design decisions', list(p.decisions))}
      <section class="pm-section"><h3>Final design gallery</h3>${galleryHtml}</section>
      ${section('Key takeaways', list(p.takeaways))}`;
    modalScroll.scrollTop = 0;
  }

  // Projects currently visible under the active filter, used for Previous / Next
  function visibleProjects() { return PROJECTS.filter(matchesFilter); }

  function openProject(id) {
    const p = PROJECTS.find((x) => x.id === id);
    if (!p) return;
    currentId = id;
    renderProject(p);
    if (!modal.open) {
      if (typeof modal.showModal === 'function') modal.showModal(); else modal.setAttribute('open', '');
      body.classList.add('scroll-lock');
    }
    // Deep link: the address bar shows #project-id so a case study can be shared
    history.replaceState(null, '', '#' + id);
  }

  function step(direction) {
    const items = visibleProjects();
    if (items.length < 2) return;
    const index = items.findIndex((x) => x.id === currentId);
    const next = items[(index + direction + items.length) % items.length];
    openProject(next.id);
  }

  $('#pm-prev').addEventListener('click', () => step(-1));
  $('#pm-next').addEventListener('click', () => step(1));
  $('#pm-close').addEventListener('click', () => modal.close());

  // Clicking the dimmed area outside the dialog closes it
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.close(); });

  modal.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });

  modal.addEventListener('close', () => {
    body.classList.remove('scroll-lock');
    history.replaceState(null, '', location.pathname + location.search + '#portfolio');
    // Return focus to the card that opened the modal
    const card = $(`.card[data-id="${CSS.escape(String(currentId))}"]`, gallery);
    if (card && !card.hidden) card.focus({ preventScroll: true });
  });

  // Open a project directly when the page loads with #project-id in the address
  const startId = decodeURIComponent(location.hash.slice(1));
  if (PROJECTS.some((p) => p.id === startId)) openProject(startId);


  /* =======================================================================
     8. Contact form: validation and sending
     ======================================================================= */
  const form = $('#contact-form');
  const statusEl = $('#form-status');

  // Each rule returns an error message, or an empty string when the value is fine
  const rules = {
    name: (v) => (v.trim().length < 2 ? 'Enter your name.' : ''),
    email: (v) => (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? 'Enter an email address like name@example.com.' : ''),
    subject: (v) => (v.trim().length < 3 ? 'Enter a subject.' : ''),
    message: (v) => (v.trim().length < 10 ? 'Write a message of at least 10 characters.' : '')
  };

  function validateField(field) {
    const rule = rules[field.name];
    if (!rule) return true;
    const message = rule(field.value);
    const errorEl = $('#' + field.id + '-error');
    errorEl.textContent = message;
    field.setAttribute('aria-invalid', message ? 'true' : 'false');
    return !message;
  }

  Object.keys(rules).forEach((name) => {
    const field = form.elements[name];
    field.addEventListener('blur', () => validateField(field));
    // Once a field shows an error, re-check while typing so the message clears
    field.addEventListener('input', () => { if (field.getAttribute('aria-invalid') === 'true') validateField(field); });
  });

  function setStatus(text, kind) {
    statusEl.textContent = text;
    statusEl.className = 'form-status' + (kind ? ' is-' + kind : '');
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    setStatus('', '');

    const fields = Object.keys(rules).map((n) => form.elements[n]);
    const results = fields.map(validateField);
    if (results.includes(false)) {
      fields[results.indexOf(false)].focus();
      setStatus('Please fix the highlighted fields.', 'error');
      return;
    }

    // Honeypot: real visitors never fill this in
    if (form.elements._gotcha.value) return;

    const data = {
      name: form.elements.name.value.trim(),
      email: form.elements.email.value.trim(),
      subject: form.elements.subject.value.trim(),
      message: form.elements.message.value.trim()
    };

    if (SETTINGS.formEndpoint) {
      // Real sending through a form service (Formspree, Web3Forms, Getform, etc.)
      const submit = form.querySelector('[type="submit"]');
      submit.disabled = true;
      setStatus('Sending…', '');
      try {
        const res = await fetch(SETTINGS.formEndpoint, {
          method: 'POST',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error('Request failed with status ' + res.status);
        form.reset();
        fields.forEach((f) => f.setAttribute('aria-invalid', 'false'));
        setStatus('Thank you. Your message has been sent and I will reply soon.', 'ok');
      } catch (err) {
        setStatus('Your message could not be sent. Please email ' + SETTINGS.contactEmail + ' directly.', 'error');
      } finally {
        submit.disabled = false;
      }
    } else {
      // No form service connected yet: open the visitor's email app with the message filled in
      const mailto = 'mailto:' + SETTINGS.contactEmail +
        '?subject=' + encodeURIComponent(data.subject) +
        '&body=' + encodeURIComponent(data.message + '\n\n' + data.name + '\n' + data.email);
      setStatus('Opening your email app with your message ready to send. If nothing opens, email ' + SETTINGS.contactEmail + ' directly.', 'ok');
      window.location.href = mailto;
    }
  });


  /* =======================================================================
     9. Back-to-top button and footer year
     ======================================================================= */
  const toTop = $('#to-top');

  function onScrollTop() {
    toTop.hidden = window.scrollY < 700;
  }

  toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion.matches ? 'auto' : 'smooth' });
  });

  // One throttled scroll handler for both the header and the button
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      onScrollHeader();
      onScrollTop();
      ticking = false;
    });
  }, { passive: true });
  onScrollHeader();
  onScrollTop();

  $('#year').textContent = new Date().getFullYear();
})();

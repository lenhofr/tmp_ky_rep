function $(sel, root = document) { return root.querySelector(sel); }

function initMobileNav() {
  const toggle = $('#mobileToggle');
  const nav = $('#mobileNav');
  if (!toggle || !nav) return;

  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    nav.hidden = !open;
  };

  setOpen(false);

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    setOpen(!isOpen);
  });

  nav.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (a) setOpen(false);
  });
}

function initIssueDetails() {
  // Ensure summary toggles remain accessible and show a consistent label.
  document.querySelectorAll('details.details').forEach((d) => {
    const summary = d.querySelector('summary');
    if (!summary) return;

    const setLabel = () => {
      summary.setAttribute('aria-label', d.open ? 'Collapse details' : 'Expand details');
    };

    setLabel();
    d.addEventListener('toggle', setLabel);
  });
}

function initNewsletter() {
  const form = $('#newsletterForm');
  const email = $('#newsletterEmail');
  const status = $('#newsletterStatus');
  if (!form || !email || !status) return;

  const setStatus = (type, message) => {
    status.className = 'alert ' + type;
    status.textContent = message;
    status.hidden = false;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const value = String(email.value || '').trim();
    if (!value) {
      setStatus('error', 'Please enter your email.');
      email.focus();
      return;
    }

    // Minimal validation (browser also validates via type=email)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setStatus('error', 'Please enter a valid email address.');
      email.focus();
      return;
    }

    setStatus('success', 'Thanks — you’re signed up for updates.');
    form.reset();
    email.blur();
  });
}

initMobileNav();
initIssueDetails();
initNewsletter();

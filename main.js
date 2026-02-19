const CONFIG = {
  clinicName   : 'Clínica Dental [Nombre]',
  city         : 'Osorno',
  region       : 'Los Lagos, Chile',
  fullCity     : 'Osorno, Chile',
  address      : '[Calle] [Número], [Local], Osorno',
  whatsappNumber  : '56912345678',          // sin espacios ni "+"
  whatsappDisplay : '+56 9 1234 5678',
  phoneNumber     : '(64) 2XXX XXX',
  phoneTel        : '+56642XXXXXX',         // formato tel:
  hoursWeek : 'Lunes a Viernes: 09:00 – 13:00 | 15:00 – 20:30',
  hoursSat  : 'Sábado: 09:00 – 13:00',
  hoursSun  : 'Domingo y Festivos: Cerrado',
  mapLink   : 'https://www.google.com/maps?q=Osorno+Chile',
  mapEmbed  : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48618.2!2d-73.16!3d-40.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961598fc79ca7d!2sOsorno!5e0!3m2!1ses!2scl!4v1700000000000',
  heroInterval : 8000,              // ms entre slides del hero
  instagram : '#',
  facebook  : '#',
};
function getWhatsAppURL(customMessage) {
  var msg = customMessage ||
    'Hola, quiero agendar una evaluación en ' + CONFIG.clinicName +
    '. Mi nombre es ____ y prefiero horario ____.';
  return 'https://wa.me/' + CONFIG.whatsappNumber + '?text=' + encodeURIComponent(msg);
}

function getWhatsAppTreatmentURL(treatment) {
  var msg = 'Hola, quiero consultar por ' + treatment + ' en ' + CONFIG.clinicName +
    '. Mi nombre es ____ y prefiero horario ____.';
  return 'https://wa.me/' + CONFIG.whatsappNumber + '?text=' + encodeURIComponent(msg);
}
document.addEventListener('DOMContentLoaded', function () {
  injectDynamicContent();
  initHeroSlideshow();
  initMobileMenu();
  initFAQAccordion();
  initScrollAnimations();
  setActiveNavLink();
  initWspTooltip();
  initHeaderScroll();
});
function injectDynamicContent() {
  setAll('[data-clinic-name]',      CONFIG.clinicName);
  setAll('[data-city]',             CONFIG.city);
  setAll('[data-full-city]',        CONFIG.fullCity);
  setAll('[data-address]',          CONFIG.address);
  setAll('[data-phone]',            CONFIG.phoneNumber);
  setAll('[data-whatsapp-display]', CONFIG.whatsappDisplay);
  setAll('[data-hours-week]',       CONFIG.hoursWeek);
  setAll('[data-hours-sat]',        CONFIG.hoursSat);
  setAll('[data-hours-sun]',        CONFIG.hoursSun);
  document.querySelectorAll('[data-whatsapp-link]').forEach(function (el) {
    var custom = el.getAttribute('data-whatsapp-msg');
    el.href = getWhatsAppURL(custom || null);
  });
  document.querySelectorAll('[data-whatsapp-treatment]').forEach(function (el) {
    el.href = getWhatsAppTreatmentURL(el.getAttribute('data-whatsapp-treatment'));
  });
  document.querySelectorAll('[data-phone-link]').forEach(function (el) {
    el.href = 'tel:' + CONFIG.phoneTel;
  });
  document.querySelectorAll('[data-map-link]').forEach(function (el) {
    el.href = CONFIG.mapLink;
    el.target = '_blank';
    el.rel    = 'noopener noreferrer';
  });
  document.querySelectorAll('[data-map-embed]').forEach(function (el) {
    el.src = CONFIG.mapEmbed;
  });
}

function setAll(selector, value) {
  document.querySelectorAll(selector).forEach(function (el) { el.textContent = value; });
}
function initMobileMenu() {
  var btn     = document.getElementById('mobile-menu-btn');
  var closeBtn = document.getElementById('mobile-menu-close');
  var overlay = document.getElementById('mobile-menu-overlay');
  var menu    = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  function open() {
    menu.classList.remove('translate-x-full');
    menu.classList.add('translate-x-0');
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    overlay.classList.add('opacity-100');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }
  function close() {
    menu.classList.remove('translate-x-0');
    menu.classList.add('translate-x-full');
    overlay.classList.remove('opacity-100');
    overlay.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = '';
    btn.focus();
  }

  btn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !menu.classList.contains('translate-x-full')) close();
  });
  menu.querySelectorAll('a').forEach(function (l) { l.addEventListener('click', close); });
}
function initFAQAccordion() {
  document.querySelectorAll('[data-faq-question]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var answer = btn.nextElementSibling;
      var icon   = btn.querySelector('[data-faq-icon]');
      var isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';
      document.querySelectorAll('[data-faq-answer]').forEach(function (a) {
        a.style.maxHeight = '0px';
        var ic = a.previousElementSibling.querySelector('[data-faq-icon]');
        if (ic) ic.classList.remove('rotate-180');
        a.previousElementSibling.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        if (icon) icon.classList.add('rotate-180');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}
function initScrollAnimations() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('[data-animate]').forEach(function (el) {
      el.classList.add('animate-visible');
    });
    return;
  }
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('animate-visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('[data-animate]').forEach(function (el) {
    el.classList.add('animate-hidden');
    obs.observe(el);
  });
}
function setActiveNavLink() {
  var page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav-link]').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('text-teal-600', 'font-semibold');
      link.classList.remove('text-gray-600', 'hover:text-teal-600');
    }
  });
}
function initHeroSlideshow() {
  var container = document.getElementById('hero-slideshow');
  if (!container) return;
  var slides   = container.querySelectorAll('.hero-slide');
  var dots     = document.querySelectorAll('.hero-dot');
  var contents = document.querySelectorAll('.hero-content');
  var current  = 0;
  var total    = slides.length;
  if (total <= 1) return;

  function goTo(index) {
    if (index === current) return;
    slides[current].classList.remove('active');
    if (dots[current]) {
      dots[current].classList.remove('bg-white', 'scale-125');
      dots[current].classList.add('bg-white/40');
    }
    if (contents[current]) contents[current].classList.remove('active');
    var outImg = slides[current].querySelector('img');
    outImg.style.transition = 'none';
    outImg.style.transform  = '';
    outImg.offsetHeight;
    outImg.style.transition = '';

    current = index;
    slides[current].classList.add('active');
    if (dots[current]) {
      dots[current].classList.remove('bg-white/40');
      dots[current].classList.add('bg-white', 'scale-125');
    }
    if (contents[current]) {
      contents[current].classList.add('active');
      var kids = contents[current].children;
      for (var k = 0; k < kids.length; k++) {
        kids[k].style.animation = 'none';
        kids[k].offsetHeight;
        kids[k].style.animation = '';
      }
    }
  }

  function next() { goTo((current + 1) % total); }
  function prev() { goTo((current - 1 + total) % total); }
  var interval = CONFIG.heroInterval || 8000;
  var timer = null;

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(next, interval);
  }

  function pauseProgress() { clearInterval(timer); }
  function resumeProgress() { resetTimer(); }

  resetTimer();
  var prevBtn = document.getElementById('hero-prev');
  var nextBtn = document.getElementById('hero-next');
  if (prevBtn) prevBtn.addEventListener('click', function () { prev(); resetTimer(); });
  if (nextBtn) nextBtn.addEventListener('click', function () { next(); resetTimer(); });
  document.addEventListener('keydown', function (e) {
    var hero = document.getElementById('hero');
    if (!hero) return;
    var rect = hero.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;
    if (e.key === 'ArrowLeft')  { prev(); resetTimer(); }
    if (e.key === 'ArrowRight') { next(); resetTimer(); }
  });
  container.closest('section').addEventListener('mouseenter', function () {
    pauseProgress();
  });
  container.closest('section').addEventListener('mouseleave', function () {
    resumeProgress();
  });
  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
      goTo(i);
      resetTimer();
    });
  });
}
function initWspTooltip() {
  var tooltips = document.querySelectorAll('.wsp-tooltip');
  if (!tooltips.length) return;
  setTimeout(function () {
    tooltips.forEach(function (t) { t.classList.add('show'); });
  }, 5000);
}
function initHeaderScroll() {
  var header = document.getElementById('site-header');
  if (!header) return;
  var lastY = 0;
  var headerH = header.offsetHeight;

  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    if (y <= 10) {
      header.style.transform = '';
    } else if (y > lastY && y > headerH) {
      header.style.transform = 'translateY(-100%)';
    }
    lastY = y;
  }, { passive: true });
}

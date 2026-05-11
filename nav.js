/* nav.js — injects shared nav and footer, highlights active link */
(function () {
  const currentPage = location.pathname.split('/').pop() || 'index.html';

  const NAV_HTML = `
<nav>
  <a href="index.html" class="nav-logo">Brown <span>Mustard</span></a>
  <ul class="nav-links">
    <li><a href="about.html" data-page="about.html">About</a></li>
    <li>
      <button class="nav-dropdown-trigger" aria-expanded="false" aria-haspopup="true">
        Our Businesses
        <svg class="nav-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="nav-dropdown" role="menu">
        <a href="https://www.bmmowing.co.nz" target="_blank" rel="noopener" role="menuitem">
          <svg viewBox="0 0 24 24"><path d="M3 17h18M7 17V9l4-4h6l2 4v8M7 13h10"/><circle cx="9" cy="19" r="2"/><circle cx="16" cy="19" r="2"/></svg>
          BM Mowing
          <span class="dropdown-ext">↗</span>
        </a>
      </div>
    </li>
    <li><a href="careers.html" data-page="careers.html">Careers</a></li>
    <li><a href="contact.html" data-page="contact.html">Contact</a></li>
  </ul>
  <button class="nav-hamburger" aria-label="Open menu" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="nav-mobile" id="navMobile">
  <a href="about.html">About</a>
  <button class="mobile-biz-toggle">Our Businesses ▾</button>
  <div class="mobile-sub" id="mobileSub">
    <a href="https://www.bmmowing.co.nz" target="_blank" rel="noopener">BM Mowing ↗</a>
  </div>
  <a href="careers.html">Careers</a>
  <a href="contact.html">Contact</a>
</div>`;

  const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <a href="index.html" class="footer-logo">Brown <span>Mustard</span></a>
    <ul class="footer-links">
      <li><a href="about.html">About</a></li>
      <li><a href="careers.html">Careers</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="https://www.bmmowing.co.nz" target="_blank" rel="noopener">BM Mowing ↗</a></li>
    </ul>
    <p class="footer-copy">&copy; 2025 <span>Brown Mustard Ltd</span>. All rights reserved.</p>
  </div>
</footer>`;

  // Inject nav before body content
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // Active link
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    if (a.dataset.page === currentPage) a.classList.add('active');
  });

  // Dropdown toggle
  const trigger = document.querySelector('.nav-dropdown-trigger');
  const dropdown = document.querySelector('.nav-dropdown');
  if (trigger && dropdown) {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = dropdown.classList.toggle('open');
      trigger.setAttribute('aria-expanded', open);
    });
    document.addEventListener('click', () => {
      dropdown.classList.remove('open');
      trigger.setAttribute('aria-expanded', false);
    });
    dropdown.addEventListener('click', e => e.stopPropagation());
  }

  // Hamburger
  const burger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.getElementById('navMobile');
  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      burger.setAttribute('aria-expanded', open);
    });
  }

  // Mobile sub-menu
  const bizToggle = document.querySelector('.mobile-biz-toggle');
  const mobileSub = document.getElementById('mobileSub');
  if (bizToggle && mobileSub) {
    bizToggle.addEventListener('click', () => mobileSub.classList.toggle('open'));
  }
})();

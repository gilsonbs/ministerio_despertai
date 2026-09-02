/* ==========================================================================
   MINISTÉRIO DESPERTAR - FULL CUSTOMIZATION & INTERACTIVE ENGINE
   Real-Time DOM Updates, LocalStorage Persistence, Import/Export
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. State Management
  const STORAGE_KEY = 'MINISTERIO_DESPERTAI_CONFIG';
  let currentConfig = loadSavedConfig();

  function loadSavedConfig() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error loading config from localStorage:', e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_CONFIG));
  }

  function saveConfig(config) {
    currentConfig = config;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  }

  // 2. Render Engine
  function applyConfigToSite(config) {
    // --- Branding & Colors ---
    document.documentElement.style.setProperty('--custom-logo-height', `${config.branding.logoSize}px`);
    document.documentElement.style.setProperty('--custom-navbar-bg', config.branding.navbarBg);
    document.documentElement.style.setProperty('--custom-nav-link-color', config.branding.navLinkColor);
    document.documentElement.style.setProperty('--custom-nav-btn-bg', config.branding.navBtnBg);
    document.documentElement.style.setProperty('--custom-nav-btn-text', config.branding.navBtnTextColor);

    // --- Hero ---
    const heroSection = document.getElementById('hero');
    if (heroSection && config.hero.backgroundImage) {
      heroSection.style.background = `linear-gradient(90deg, #FAF8F5 0%, #FAF8F5 45%, rgba(250, 248, 245, 0.4) 65%, rgba(250, 248, 245, 0) 100%), url('${config.hero.backgroundImage}') right center/cover no-repeat`;
    }

    const heroVideoIframe = document.getElementById('heroVideoIframe');
    if (heroVideoIframe && config.hero.videoUrl) {
      heroVideoIframe.src = config.hero.videoUrl;
    }

    setElementText('heroEyebrow', config.hero.eyebrow);
    setElementText('heroH1Line1', config.hero.h1Line1);
    setElementText('heroH1Line2', config.hero.h1Line2);
    setElementText('heroH1Line3', config.hero.h1Line3);
    setElementText('heroDesc', config.hero.description);
    
    setButtonText('heroBtn1', config.hero.btn1Text);
    setButtonText('heroBtn2', config.hero.btn2Text);

    setElementText('hl1Title', config.hero.highlight1Title);
    setElementText('hl1Text', config.hero.highlight1Text);
    setElementText('hl2Title', config.hero.highlight2Title);
    setElementText('hl2Text', config.hero.highlight2Text);
    setElementText('hl3Title', config.hero.highlight3Title);
    setElementText('hl3Text', config.hero.highlight3Text);

    // --- About Us ---
    const aboutImg = document.getElementById('aboutImage');
    if (aboutImg && config.about.image) aboutImg.src = config.about.image;

    setElementText('aboutEyebrow', config.about.eyebrow);
    setElementText('aboutHeading', config.about.heading);
    setElementText('aboutDesc', config.about.description);
    setElementText('aboutBtn', config.about.btnText);

    const aboutChecklistEl = document.getElementById('aboutChecklist');
    if (aboutChecklistEl && config.about.checklist) {
      aboutChecklistEl.innerHTML = config.about.checklist
        .map(item => `<li><i class="fa-solid fa-check"></i> ${escapeHtml(item)}</li>`)
        .join('');
    }

    // --- Ministries ---
    setElementText('ministriesEyebrow', config.ministries.eyebrow);
    setElementText('ministriesHeading', config.ministries.heading);

    const ministriesGridEl = document.getElementById('ministriesGrid');
    if (ministriesGridEl && config.ministries.items) {
      ministriesGridEl.innerHTML = config.ministries.items.map(m => `
        <div class="ministry-card">
          <div class="ministry-card-icon">
            <i class="fa-solid ${m.icon}"></i>
          </div>
          <h3 class="ministry-card-title">${escapeHtml(m.title)}</h3>
          <p class="ministry-card-text">${escapeHtml(m.text)}</p>
          <a href="${m.linkUrl || '#'}" class="ministry-card-link">${escapeHtml(m.linkLabel || 'Saiba Mais')} <i class="fa-solid fa-arrow-right" style="font-size: 11px;"></i></a>
        </div>
      `).join('');
    }

    // --- Events ---
    setElementText('eventsEyebrow', config.events.eyebrow);
    setElementText('eventsHeading', config.events.heading);

    const eventsListEl = document.getElementById('eventsList');
    if (eventsListEl && config.events.items) {
      eventsListEl.innerHTML = config.events.items.map(e => `
        <div class="event-item">
          <div class="event-badge">
            <span class="event-month">${escapeHtml(e.month)}</span>
            <span class="event-day">${escapeHtml(e.day)}</span>
          </div>
          <div class="event-content">
            <h4 class="event-title">${escapeHtml(e.title)}</h4>
            <div class="event-datetime">${escapeHtml(e.datetime)}</div>
            <div class="event-text">${escapeHtml(e.text)}</div>
          </div>
          <a href="${e.url || '#'}" class="event-link-arrow"><i class="fa-solid fa-arrow-right"></i></a>
        </div>
      `).join('');
    }

    // --- Give & CTA Banner ---
    setElementText('giveEyebrow', config.give.eyebrow);
    setElementText('giveHeading', config.give.heading);
    setElementText('giveDesc', config.give.description);
    setElementText('giveBtn', config.give.btnText);
    setElementText('giveNote', config.give.note);

    setElementText('ctaBannerHeading', config.ctaBanner.heading);
    setElementText('ctaBannerText', config.ctaBanner.text);
    setElementText('ctaBannerBtn', config.ctaBanner.btnText);

    // --- Stats ---
    const statsGridEl = document.getElementById('statsGrid');
    if (statsGridEl && config.stats.items) {
      statsGridEl.innerHTML = config.stats.items.map(s => `
        <div class="stat-box">
          <div class="stat-icon">
            <i class="fa-solid ${s.icon}"></i>
          </div>
          <div>
            <div class="stat-value" data-target="${s.target}">${s.target.toLocaleString('pt-BR')}+</div>
            <div class="stat-label">${escapeHtml(s.label)}</div>
          </div>
        </div>
      `).join('');
    }

    // --- Testimonials ---
    setElementText('testimonialsEyebrow', config.testimonials.eyebrow);
    setElementText('testimonialsHeading', config.testimonials.heading);

    const testimonialsGridEl = document.getElementById('testimonialsGrid');
    const dotsEl = document.getElementById('carouselDots');

    if (testimonialsGridEl && config.testimonials.items) {
      testimonialsGridEl.innerHTML = config.testimonials.items.map(t => `
        <div class="testimonial-card">
          <i class="fa-solid fa-quote-left quote-mark"></i>
          <p class="testimonial-quote">"${escapeHtml(t.quote)}"</p>
          <div class="testimonial-author-group">
            <img src="${t.avatar || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80'}" alt="${escapeHtml(t.author)}" class="testimonial-avatar">
            <div>
              <div class="author-name">${escapeHtml(t.author)}</div>
              <div class="author-location">${escapeHtml(t.location)}</div>
            </div>
          </div>
        </div>
      `).join('');

      if (dotsEl) {
        dotsEl.innerHTML = config.testimonials.items.map((_, idx) => `
          <span class="carousel-dot ${idx === 0 ? 'active' : ''}"></span>
        `).join('');

        initCarouselDots();
      }
    }

    // --- Menu & Footer Navigation ---
    const navMenuEl = document.getElementById('navMenu');
    const footerQuickLinksEl = document.getElementById('footerQuickLinks');
    const footerMinistriesEl = document.getElementById('footerMinistriesList');

    if (navMenuEl && config.menu) {
      navMenuEl.innerHTML = config.menu.map(m => `
        <li><a href="${m.url}" class="nav-menu-link ${m.active ? 'active' : ''}">${escapeHtml(m.label)}</a></li>
      `).join('');
    }

    if (footerQuickLinksEl && config.menu) {
      footerQuickLinksEl.innerHTML = config.menu.map(m => `
        <li><a href="${m.url}">${escapeHtml(m.label)}</a></li>
      `).join('');
    }

    if (footerMinistriesEl && config.ministries.items) {
      footerMinistriesEl.innerHTML = config.ministries.items.map(m => `
        <li><a href="${m.linkUrl || '#'}">${escapeHtml(m.title)}</a></li>
      `).join('');
    }
  }

  function setElementText(id, text) {
    const el = document.getElementById(id);
    if (el && text !== undefined) el.textContent = text;
  }

  function setButtonText(id, text) {
    const el = document.getElementById(id);
    if (!el || text === undefined) return;
    const span = el.querySelector('span');
    if (span) {
      span.textContent = text;
    } else {
      el.textContent = text;
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, m => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    })[m]);
  }

  // 3. Customizer Drawer & Tabs Logic
  const triggerBtn = document.getElementById('customizerTriggerBtn');
  const closeBtn = document.getElementById('closeCustomizerBtn');
  const drawer = document.getElementById('customizerDrawer');
  const overlayBg = document.getElementById('customizerOverlayBg');
  const tabBtns = document.querySelectorAll('.customizer-tab-btn');
  const tabContents = document.querySelectorAll('.customizer-tab-content');

  function openDrawer() {
    drawer.classList.add('open');
    overlayBg.classList.add('active');
    populateFormInputs(currentConfig);
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    overlayBg.classList.remove('active');
  }

  if (triggerBtn) triggerBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlayBg) overlayBg.addEventListener('click', closeDrawer);

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetTab = document.getElementById(btn.getAttribute('data-tab'));
      if (targetTab) targetTab.classList.add('active');
    });
  });

  // 4. Populate & Sync Control Panel Inputs
  function populateFormInputs(config) {
    // Branding
    setValue('inputLogoSize', config.branding.logoSize);
    setElementText('logoSizeVal', config.branding.logoSize);
    setValue('inputNavbarBg', config.branding.navbarBg);
    setValue('inputNavLinkColor', config.branding.navLinkColor);
    setValue('inputNavBtnBg', config.branding.navBtnBg);
    setValue('inputNavBtnTextColor', config.branding.navBtnTextColor);

    // Hero
    setValue('inputHeroBg', config.hero.backgroundImage);
    setValue('inputHeroVideo', config.hero.videoUrl);
    setValue('inputHeroEyebrow', config.hero.eyebrow);
    setValue('inputHeroH1Line1', config.hero.h1Line1);
    setValue('inputHeroH1Line2', config.hero.h1Line2);
    setValue('inputHeroH1Line3', config.hero.h1Line3);
    setValue('inputHeroDesc', config.hero.description);
    setValue('inputHeroBtn1', config.hero.btn1Text);
    setValue('inputHeroBtn2', config.hero.btn2Text);

    // About
    setValue('inputAboutImage', config.about.image);
    setValue('inputAboutEyebrow', config.about.eyebrow);
    setValue('inputAboutHeading', config.about.heading);
    setValue('inputAboutDesc', config.about.description);
    setValue('inputAboutChecklist', config.about.checklist ? config.about.checklist.join('\n') : '');

    // Render CRUD lists
    renderMinistriesCrud(config.ministries.items);
    renderEventsCrud(config.events.items);
    renderStatsCrud(config.stats.items);
    renderTestimonialsCrud(config.testimonials.items);
    renderMenuCrud(config.menu);
  }

  function setValue(id, val) {
    const el = document.getElementById(id);
    if (el && val !== undefined) el.value = val;
  }

  // 5. Live Form Listeners (Real-Time Update)
  document.getElementById('inputLogoSize')?.addEventListener('input', (e) => {
    currentConfig.branding.logoSize = e.target.value;
    setElementText('logoSizeVal', e.target.value);
    applyConfigToSite(currentConfig);
  });

  ['inputNavbarBg', 'inputNavLinkColor', 'inputNavBtnBg', 'inputNavBtnTextColor'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', () => {
      readBrandingInputs();
      applyConfigToSite(currentConfig);
    });
  });

  function readBrandingInputs() {
    currentConfig.branding.navbarBg = document.getElementById('inputNavbarBg').value;
    currentConfig.branding.navLinkColor = document.getElementById('inputNavLinkColor').value;
    currentConfig.branding.navBtnBg = document.getElementById('inputNavBtnBg').value;
    currentConfig.branding.navBtnTextColor = document.getElementById('inputNavBtnTextColor').value;
  }

  ['inputHeroBg', 'inputHeroVideo', 'inputHeroEyebrow', 'inputHeroH1Line1', 'inputHeroH1Line2', 'inputHeroH1Line3', 'inputHeroDesc', 'inputHeroBtn1', 'inputHeroBtn2'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', () => {
      currentConfig.hero.backgroundImage = document.getElementById('inputHeroBg').value;
      currentConfig.hero.videoUrl = document.getElementById('inputHeroVideo').value;
      currentConfig.hero.eyebrow = document.getElementById('inputHeroEyebrow').value;
      currentConfig.hero.h1Line1 = document.getElementById('inputHeroH1Line1').value;
      currentConfig.hero.h1Line2 = document.getElementById('inputHeroH1Line2').value;
      currentConfig.hero.h1Line3 = document.getElementById('inputHeroH1Line3').value;
      currentConfig.hero.description = document.getElementById('inputHeroDesc').value;
      currentConfig.hero.btn1Text = document.getElementById('inputHeroBtn1').value;
      currentConfig.hero.btn2Text = document.getElementById('inputHeroBtn2').value;
      applyConfigToSite(currentConfig);
    });
  });

  ['inputAboutImage', 'inputAboutEyebrow', 'inputAboutHeading', 'inputAboutDesc', 'inputAboutChecklist'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', () => {
      currentConfig.about.image = document.getElementById('inputAboutImage').value;
      currentConfig.about.eyebrow = document.getElementById('inputAboutEyebrow').value;
      currentConfig.about.heading = document.getElementById('inputAboutHeading').value;
      currentConfig.about.description = document.getElementById('inputAboutDesc').value;
      currentConfig.about.checklist = document.getElementById('inputAboutChecklist').value
        .split('\n')
        .map(s => s.trim())
        .filter(s => s.length > 0);
      applyConfigToSite(currentConfig);
    });
  });

  // 6. CRUD Renderers
  function renderMinistriesCrud(items) {
    const container = document.getElementById('ministriesCrudContainer');
    if (!container) return;
    container.innerHTML = items.map((m, idx) => `
      <div class="crud-card-item">
        <button class="crud-remove-btn" onclick="removeMinistryItem(${idx})"><i class="fa-solid fa-trash"></i></button>
        <div class="form-field">
          <label>Título</label>
          <input type="text" value="${escapeHtml(m.title)}" onchange="updateMinistryItem(${idx}, 'title', this.value)">
        </div>
        <div class="form-field">
          <label>Ícone (FontAwesome Class)</label>
          <input type="text" value="${escapeHtml(m.icon)}" onchange="updateMinistryItem(${idx}, 'icon', this.value)">
        </div>
        <div class="form-field">
          <label>Descrição</label>
          <input type="text" value="${escapeHtml(m.text)}" onchange="updateMinistryItem(${idx}, 'text', this.value)">
        </div>
      </div>
    `).join('');
  }

  window.updateMinistryItem = (idx, field, val) => {
    currentConfig.ministries.items[idx][field] = val;
    applyConfigToSite(currentConfig);
  };

  window.removeMinistryItem = (idx) => {
    currentConfig.ministries.items.splice(idx, 1);
    renderMinistriesCrud(currentConfig.ministries.items);
    applyConfigToSite(currentConfig);
  };

  document.getElementById('addMinistryBtn')?.addEventListener('click', () => {
    currentConfig.ministries.items.push({
      id: Date.now().toString(),
      title: 'Novo Ministério',
      icon: 'fa-star',
      text: 'Descrição do novo ministério.',
      linkLabel: 'Saiba Mais',
      linkUrl: '#'
    });
    renderMinistriesCrud(currentConfig.ministries.items);
    applyConfigToSite(currentConfig);
  });

  function renderEventsCrud(items) {
    const container = document.getElementById('eventsCrudContainer');
    if (!container) return;
    container.innerHTML = items.map((e, idx) => `
      <div class="crud-card-item">
        <button class="crud-remove-btn" onclick="removeEventItem(${idx})"><i class="fa-solid fa-trash"></i></button>
        <div style="display: flex; gap: 8px;">
          <div class="form-field" style="flex: 1;">
            <label>Mês (Ex: MAI)</label>
            <input type="text" value="${escapeHtml(e.month)}" onchange="updateEventItem(${idx}, 'month', this.value)">
          </div>
          <div class="form-field" style="flex: 1;">
            <label>Dia (Ex: 19)</label>
            <input type="text" value="${escapeHtml(e.day)}" onchange="updateEventItem(${idx}, 'day', this.value)">
          </div>
        </div>
        <div class="form-field">
          <label>Título do Evento</label>
          <input type="text" value="${escapeHtml(e.title)}" onchange="updateEventItem(${idx}, 'title', this.value)">
        </div>
        <div class="form-field">
          <label>Data & Horário</label>
          <input type="text" value="${escapeHtml(e.datetime)}" onchange="updateEventItem(${idx}, 'datetime', this.value)">
        </div>
        <div class="form-field">
          <label>Descrição</label>
          <input type="text" value="${escapeHtml(e.text)}" onchange="updateEventItem(${idx}, 'text', this.value)">
        </div>
      </div>
    `).join('');
  }

  window.updateEventItem = (idx, field, val) => {
    currentConfig.events.items[idx][field] = val;
    applyConfigToSite(currentConfig);
  };

  window.removeEventItem = (idx) => {
    currentConfig.events.items.splice(idx, 1);
    renderEventsCrud(currentConfig.events.items);
    applyConfigToSite(currentConfig);
  };

  document.getElementById('addEventBtn')?.addEventListener('click', () => {
    currentConfig.events.items.push({
      id: Date.now().toString(),
      month: 'MAI',
      day: '15',
      title: 'Novo Culto / Encontro',
      datetime: '15 de Maio - 19h30',
      text: 'Descrição do novo evento agendado.',
      url: '#'
    });
    renderEventsCrud(currentConfig.events.items);
    applyConfigToSite(currentConfig);
  });

  function renderStatsCrud(items) {
    const container = document.getElementById('statsCrudContainer');
    if (!container) return;
    container.innerHTML = items.map((s, idx) => `
      <div class="crud-card-item">
        <div class="form-field">
          <label>Valor Numérico</label>
          <input type="number" value="${s.target}" onchange="updateStatItem(${idx}, 'target', +this.value)">
        </div>
        <div class="form-field">
          <label>Rótulo</label>
          <input type="text" value="${escapeHtml(s.label)}" onchange="updateStatItem(${idx}, 'label', this.value)">
        </div>
      </div>
    `).join('');
  }

  window.updateStatItem = (idx, field, val) => {
    currentConfig.stats.items[idx][field] = val;
    applyConfigToSite(currentConfig);
  };

  function renderTestimonialsCrud(items) {
    const container = document.getElementById('testimonialsCrudContainer');
    if (!container) return;
    container.innerHTML = items.map((t, idx) => `
      <div class="crud-card-item">
        <button class="crud-remove-btn" onclick="removeTestimonialItem(${idx})"><i class="fa-solid fa-trash"></i></button>
        <div class="form-field">
          <label>Autor</label>
          <input type="text" value="${escapeHtml(t.author)}" onchange="updateTestimonialItem(${idx}, 'author', this.value)">
        </div>
        <div class="form-field">
          <label>Depoimento</label>
          <input type="text" value="${escapeHtml(t.quote)}" onchange="updateTestimonialItem(${idx}, 'quote', this.value)">
        </div>
        <div class="form-field">
          <label>Cidade / Localização</label>
          <input type="text" value="${escapeHtml(t.location)}" onchange="updateTestimonialItem(${idx}, 'location', this.value)">
        </div>
      </div>
    `).join('');
  }

  window.updateTestimonialItem = (idx, field, val) => {
    currentConfig.testimonials.items[idx][field] = val;
    applyConfigToSite(currentConfig);
  };

  window.removeTestimonialItem = (idx) => {
    currentConfig.testimonials.items.splice(idx, 1);
    renderTestimonialsCrud(currentConfig.testimonials.items);
    applyConfigToSite(currentConfig);
  };

  function renderMenuCrud(items) {
    const container = document.getElementById('menuCrudContainer');
    if (!container) return;
    container.innerHTML = items.map((m, idx) => `
      <div class="crud-card-item">
        <button class="crud-remove-btn" onclick="removeMenuItem(${idx})"><i class="fa-solid fa-trash"></i></button>
        <div style="display: flex; gap: 8px;">
          <div class="form-field" style="flex: 1;">
            <label>Rótulo do Link</label>
            <input type="text" value="${escapeHtml(m.label)}" onchange="updateMenuItem(${idx}, 'label', this.value)">
          </div>
          <div class="form-field" style="flex: 1;">
            <label>URL / Âncora</label>
            <input type="text" value="${escapeHtml(m.url)}" onchange="updateMenuItem(${idx}, 'url', this.value)">
          </div>
        </div>
      </div>
    `).join('');
  }

  window.updateMenuItem = (idx, field, val) => {
    currentConfig.menu[idx][field] = val;
    applyConfigToSite(currentConfig);
  };

  window.removeMenuItem = (idx) => {
    currentConfig.menu.splice(idx, 1);
    renderMenuCrud(currentConfig.menu);
    applyConfigToSite(currentConfig);
  };

  document.getElementById('addMenuItemBtn')?.addEventListener('click', () => {
    currentConfig.menu.push({
      label: 'Nova Página',
      url: '#'
    });
    renderMenuCrud(currentConfig.menu);
    applyConfigToSite(currentConfig);
  });

  // 7. Save, Export, Import & Reset Actions
  document.getElementById('saveLocalStorageBtn')?.addEventListener('click', () => {
    saveConfig(currentConfig);
    alert('Configurações salvas com sucesso no navegador!');
  });

  document.getElementById('applyAndSaveBtn')?.addEventListener('click', () => {
    saveConfig(currentConfig);
    alert('Alterações aplicadas e salvas com sucesso!');
    closeDrawer();
  });

  document.getElementById('exportConfigBtn')?.addEventListener('click', () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(currentConfig, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'ministerio_despertai_config.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  });

  document.getElementById('importConfigFile')?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        currentConfig = imported;
        saveConfig(imported);
        applyConfigToSite(imported);
        populateFormInputs(imported);
        alert('Configuração importada com sucesso!');
      } catch (err) {
        alert('Erro ao importar arquivo JSON. Verifique se a estrutura está correta.');
      }
    };
    reader.readAsText(file);
  });

  document.getElementById('resetConfigBtn')?.addEventListener('click', () => {
    if (confirm('Tem certeza que deseja restaurar as configurações padrão de fábrica?')) {
      currentConfig = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
      saveConfig(currentConfig);
      applyConfigToSite(currentConfig);
      populateFormInputs(currentConfig);
      alert('Configurações restauradas com sucesso!');
    }
  });

  // 8. Mobile Navigation & Modals Control
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileNavToggle && navMenu) {
    mobileNavToggle.addEventListener('click', () => {
      const isVisible = navMenu.style.display === 'flex';
      navMenu.style.display = isVisible ? 'none' : 'flex';
      navMenu.style.flexDirection = 'column';
      navMenu.style.position = 'absolute';
      navMenu.style.top = '88px';
      navMenu.style.left = '0';
      navMenu.style.right = '0';
      navMenu.style.backgroundColor = '#FFFFFF';
      navMenu.style.padding = '24px';
      navMenu.style.boxShadow = '0 12px 24px rgba(12, 30, 58, 0.12)';
      navMenu.style.borderBottom = '1px solid #E5E2DA';
    });
  }

  const visitModal = document.getElementById('visitModal');
  const videoModal = document.getElementById('videoModal');
  const closeModalBtns = document.querySelectorAll('.js-modal-close');

  document.addEventListener('click', (e) => {
    if (e.target.closest('.js-plan-visit')) {
      e.preventDefault();
      if (visitModal) visitModal.classList.add('active');
    }
    if (e.target.closest('.js-watch-video')) {
      e.preventDefault();
      if (videoModal) videoModal.classList.add('active');
    }
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (visitModal) visitModal.classList.remove('active');
      if (videoModal) videoModal.classList.remove('active');
    });
  });

  const visitForm = document.getElementById('visitForm');
  if (visitForm) {
    visitForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Obrigado! Sua visita foi agendada com sucesso. Nossa equipe do Ministério Despertar está ansiosa para receber você!');
      if (visitModal) visitModal.classList.remove('active');
      visitForm.reset();
    });
  }

  function initCarouselDots() {
    const dots = document.querySelectorAll('.carousel-dot');
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');

        testimonialCards.forEach((card, idx) => {
          if (idx === index) {
            card.style.borderColor = 'var(--color-accent)';
            card.style.transform = 'translateY(-4px)';
            card.style.boxShadow = 'var(--shadow-card)';
          } else {
            card.style.borderColor = 'var(--color-border)';
            card.style.transform = 'none';
            card.style.boxShadow = 'none';
          }
        });
      });
    });
  }

  // Initial Render on Page Load
  applyConfigToSite(currentConfig);
});

/* ==========================================================================
   MINISTÉRIO DESPERTAR - APLICAÇÃO INTERATIVA (PT-BR)
   Navegação Mobile, Modais, Animações e Carrossel
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Menu Mobile Drawer
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

  // 2. Controle de Modais
  const visitModal = document.getElementById('visitModal');
  const videoModal = document.getElementById('videoModal');
  const planVisitBtns = document.querySelectorAll('.js-plan-visit');
  const watchVideoBtns = document.querySelectorAll('.js-watch-video');
  const closeModalBtns = document.querySelectorAll('.js-modal-close');

  function openModal(modal) {
    if (modal) modal.classList.add('active');
  }

  function closeModal(modal) {
    if (modal) modal.classList.remove('active');
  }

  planVisitBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(visitModal);
    });
  });

  watchVideoBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(videoModal);
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      closeModal(visitModal);
      closeModal(videoModal);
    });
  });

  [visitModal, videoModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(modal);
      });
    }
  });

  // 3. Submissão do Formulário de Visita
  const visitForm = document.getElementById('visitForm');
  if (visitForm) {
    visitForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Obrigado! Sua visita foi agendada com sucesso. Nossa equipe do Ministério Despertar está ansiosa para receber você!');
      closeModal(visitModal);
      visitForm.reset();
    });
  }

  // 4. Carrossel de Depoimentos
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

  // 5. Animação dos Contadores ao Rolar a Página
  const statValues = document.querySelectorAll('.stat-value');
  let animated = false;

  const animateStats = () => {
    const statsSection = document.getElementById('stats');
    if (!statsSection) return;

    const sectionPos = statsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.25;

    if (sectionPos < screenPos && !animated) {
      animated = true;
      statValues.forEach(stat => {
        const target = +stat.getAttribute('data-target');
        let count = 0;
        const step = target / 40;

        const updateCount = () => {
          count += step;
          if (count < target) {
            stat.innerText = Math.ceil(count).toLocaleString('pt-BR') + '+';
            setTimeout(updateCount, 30);
          } else {
            stat.innerText = target.toLocaleString('pt-BR') + '+';
          }
        };
        updateCount();
      });
    }
  };

  window.addEventListener('scroll', animateStats);
});

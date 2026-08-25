document.addEventListener('DOMContentLoaded', () => {
  const yearNode = document.getElementById('currentYear');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  const form = document.getElementById('quoteForm');
  const status = form?.querySelector('.status-message');

  if (form && status) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const name = formData.get('name')?.toString().trim() || 'there';
      const email = formData.get('email')?.toString().trim() || 'Not provided';
      const phone = formData.get('phone')?.toString().trim() || 'Not provided';
      const message = formData.get('message')?.toString().trim() || 'No project details provided';
      const whatsappMessage = [
        'Hello ADPRO GH LTD, I would like to request a quote.',
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Project details: ${message}`
      ].join('\n');
      const whatsappUrl = `https://wa.me/233598556314?text=${encodeURIComponent(whatsappMessage)}`;

      status.textContent = `Thanks, ${name}! Opening WhatsApp now.`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      form.reset();
    });
  }

  const canTiltCards = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (canTiltCards && !prefersReducedMotion) {
    document.querySelectorAll('.step-card, .feature-image-card').forEach((card) => {
      card.addEventListener('mousemove', (event) => {
        const bounds = card.getBoundingClientRect();
        const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
        const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
        const rotateX = vertical * -10;
        const rotateY = horizontal * 10;

        card.style.transform = `translateY(-6px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filterValue = button.dataset.filter;

      filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));

      portfolioCards.forEach((card) => {
        const match = filterValue === 'all' || card.dataset.category === filterValue;
        card.classList.toggle('is-hidden', !match);
      });
    });
  });

  document.querySelectorAll('.expand-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const card = button.closest('.portfolio-card');
      if (!card) return;
      card.classList.toggle('active');
      const icon = button.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');
      }
    });
  });

  const teamTrack = document.querySelector('.team-track');
  const cards = Array.from(document.querySelectorAll('.team-card'));
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  if (teamTrack && cards.length > 0) {
    let currentIndex = 0;

    const getVisibleCards = () => {
      if (window.innerWidth <= 680) return 1;
      if (window.innerWidth <= 980) return 2;
      return 3;
    };

    const getMaxIndex = () => Math.max(0, cards.length - getVisibleCards());

    const renderSlider = () => {
      const gap = 24;
      const cardWidth = cards[0].getBoundingClientRect().width + gap;
      teamTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    };

    prevBtn?.addEventListener('click', () => {
      currentIndex = Math.max(0, currentIndex - 1);
      renderSlider();
    });

    nextBtn?.addEventListener('click', () => {
      currentIndex = Math.min(getMaxIndex(), currentIndex + 1);
      renderSlider();
    });

    window.addEventListener('resize', () => {
      currentIndex = Math.min(currentIndex, getMaxIndex());
      renderSlider();
    });

    renderSlider();
  }
});

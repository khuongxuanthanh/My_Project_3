const swiper = new Swiper('.swiper', {
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});

// show/hide Faqs
const faqs = document.querySelectorAll('section#faqs article');

faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');

    //  change icon
    const icon = faq.querySelector('.icon i');
    if (icon.className === 'fa-solid fa-plus') {
      icon.className = 'fa-solid fa-xmark';
    } else {
      icon.className = 'fa-solid fa-plus';
    }
  });
});

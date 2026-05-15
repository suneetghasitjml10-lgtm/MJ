const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.88;

  reveals.forEach((item) => {
    const top = item.getBoundingClientRect().top;

    if (top < triggerBottom) {
      item.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();

export function navFadeIn() {
  document.addEventListener('DOMContentLoaded', function () {
    const sentinel = document.querySelector('.nav-sentinel');
    const nav = document.querySelector('.navbar');
    
    if (!sentinel || !nav) return;
  
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          nav.classList.remove('is-stuck');
        } else {
          nav.classList.add('is-stuck');
        }
      });
    }, { root: null, threshold: 0 });
  
    io.observe(sentinel);
  });
}
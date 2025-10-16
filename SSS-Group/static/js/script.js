const animItems = document.querySelectorAll('.animate');

function onScroll() {
  animItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add('visible');
    }
  });
}

// sahifa scroll bo‘lganda ishga tushadi
window.addEventListener('scroll', onScroll);

// sahifa yuklanganda ham tekshiradi
onScroll();


const box = document.querySelector('.box');
    window.addEventListener('scroll', () => {
      const boxTop = box.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight - 100;

      if (boxTop < triggerPoint) {
        box.classList.add('show');
      }
    });
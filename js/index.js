const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const menu = document.querySelector('.mobile-menu-list');

mobileMenuBtn.addEventListener('click', () => {
  menu.classList.toggle('mobile-menu-active');
})
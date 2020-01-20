function classToggle() {
    const navs = document.querySelectorAll('.nav-menu-item');
    navs.forEach(nav => nav.classList.toggle('nav-menu-item-show'));
  }
  
document.querySelector('.nav-toggle-menu').addEventListener('click', classToggle);
// menu hide show
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
})

// navbar active menu
const sections = document.querySelectorAll('section');
const navList = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navList.forEach((link) => {
        link.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      })
    }
  })
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
})
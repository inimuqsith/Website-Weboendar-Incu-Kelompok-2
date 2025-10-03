const navbar = document.querySelector('.navbar');
const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');

const toggleNavigation = () => {
  navbarNav.classList.toggle('active');
};

hamburger.addEventListener('click', (event) => {
  event.preventDefault();
  toggleNavigation();
});

document.addEventListener('click', (event) => {
  if (!hamburger.contains(event.target) && !navbarNav.contains(event.target)) {
    navbarNav.classList.remove('active');
  }
});

navbarNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navbarNav.classList.remove('active');
  });
});

const handleNavbarState = () => {
  if (window.scrollY > 60) {
    navbar.classList.add('navbar--scrolled');
  } else {
    navbar.classList.remove('navbar--scrolled');
  }
};

handleNavbarState();
window.addEventListener('scroll', handleNavbarState);

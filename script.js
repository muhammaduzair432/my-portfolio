document.addEventListener("DOMContentLoaded", () => {
  let menuToggle = document.getElementById('menu-toggle');
  let navLinks = document.querySelector('.nav-links');



  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});

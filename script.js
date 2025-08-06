document.addEventListener("DOMContentLoaded", () => {
  let menuToggle = document.getElementById('menu-toggle');
  let navLinks = document.querySelector('.nav-links');
  let closeIcon = document.querySelector('.close-icon');



  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
      closeIcon.style.display = 'block';
      menuToggle.style.display = 'none';
    }
    else {
      closeIcon.style.display = 'none';
      menuToggle.style.display = 'block';

    }
  });
  closeandopenMenu();
});
function closeandopenMenu() {
  let navLinks = document.querySelector('.nav-links');
  let menuToggle = document.getElementById('menu-toggle');
  let closeIcon = document.querySelector('.close-icon');
  closeIcon.addEventListener('click', () => {
    navLinks.classList.remove('active');
    closeIcon.style.display = 'none';
    menuToggle.style.display = 'block';
  });
}

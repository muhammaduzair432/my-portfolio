document.addEventListener("DOMContentLoaded", () => {
  let menuToggle = document.getElementById('menu-toggle');
  let navLinks = document.querySelector('.nav-links');
  let closeIcon = document.querySelector('.close-icon');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
      closeIcon.style.display = 'block';
      menuToggle.style.display = 'none';
    } else {
      closeIcon.style.display = 'none';
      menuToggle.style.display = 'block';
    }
  });

  // Handle close icon click
  closeIcon.addEventListener('click', () => {
    navLinks.classList.remove('active');
    closeIcon.style.display = 'none';
    menuToggle.style.display = 'block';
  });

  // Show single pages
  // let links = document.querySelectorAll('.nav-links a');
  // let pages = document.querySelectorAll('.main-content, .about-me, .projects, .contact-section, footer');

  // links.forEach(link => {
  //   link.addEventListener('click', function (event) {
  //     event.preventDefault();

  //     // Hide all pages
  //     pages.forEach(page => {
  //       page.style.display = 'none';
  //     });

  //     // Show the target section
  //     let target = this.getAttribute('data-section');
  //     let targetElement = document.getElementById(target);
  //     if (targetElement) {
  //       targetElement.style.display = 'block';
  //     }

  
});

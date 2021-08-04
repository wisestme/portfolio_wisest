// MENU SHOW Y HIDDEN
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

  // MENU SHOW
  // Validate if constant exists
  if(navToggle)
  {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
  navToggle.classList.add('hide-icon');

    })
  }

  // MENU HIDDEN
  // Validate if constant exists
if(navClose)
{
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  navToggle.classList.remove('hide-icon');

  });

}
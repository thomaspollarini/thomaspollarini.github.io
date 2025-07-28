function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
}

function changeToggleIcon(toggleButton) {
  toggleButton.classList.toggle('bi-moon-stars');
  toggleButton.classList.toggle('bi-sun');
}

function changeActiveMenuLink(activeLink, menuLinks) {
  menuLinks.forEach(link => link.classList.remove('active'));
  activeLink.classList.add('active');
}

const themeToggleButton = document.querySelector('#toggleTheme');
themeToggleButton.addEventListener('click', () => {
  toggleTheme();
  changeToggleIcon(themeToggleButton);
});

const accordionItems = document.querySelectorAll('.accordion__item');
accordionItems.forEach(item => item.addEventListener('click', () => item.classList.toggle('active')));

const menuLinks = document.querySelectorAll('nav .menu__link');
menuLinks.forEach(link => link.addEventListener('click', () => changeActiveMenuLink(link, menuLinks)));

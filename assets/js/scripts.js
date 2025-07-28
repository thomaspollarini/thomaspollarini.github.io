function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
}

function changeToggleIcon(toggleButton) {
  toggleButton.classList.toggle('bi-moon-stars');
  toggleButton.classList.toggle('bi-sun');
}

const themeToggleButton = document.querySelector('#toggleTheme');
themeToggleButton.addEventListener('click', () => {
  toggleTheme();
  changeToggleIcon(themeToggleButton);
});

const accordionItems = document.querySelectorAll('.accordion__item');
accordionItems.forEach(item => item.addEventListener('click', () => item.classList.toggle('active')));

// Handle the hover effect and show the app label
const dockIcons = document.querySelectorAll('.dock-icon');
const appLabel = document.querySelector('.app-label');

dockIcons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    const appName = icon.getAttribute('data-app');
    appLabel.textContent = appName;
    appLabel.style.opacity = '1';
    appLabel.style.left = `${icon.getBoundingClientRect().left}px`;
  });

  icon.addEventListener('mouseleave', () => {
    appLabel.style.opacity = '0';
  });
});

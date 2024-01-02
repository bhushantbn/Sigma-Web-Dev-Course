document.addEventListener('DOMContentLoaded', function () {
  const themeButtons = document.querySelectorAll('.theme-button');

  themeButtons.forEach(button => {
      button.addEventListener('click', () => {
          const theme = button.dataset.theme;
          document.body.dataset.theme = theme;

          // Persist the user's choice (optional)
          localStorage.setItem('theme', theme);
      });
  });

  // Function to set the theme based on system preference or localStorage
  const setThemeFromPreference = () => {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const savedTheme = localStorage.getItem('theme');
      document.body.dataset.theme = savedTheme || (prefersDark ? 'dark' : 'light');
      
  };

  // Check for system preference or localStorage initially
  setThemeFromPreference();

  // Listen for changes in system preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('click', setThemeFromPreference);
});
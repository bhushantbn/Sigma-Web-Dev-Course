const themeButtons = document.querySelectorAll('.theme-button');

  themeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const theme = button.dataset.theme;
      document.body.dataset.theme = theme;

      // Persist the user's choice (optional)
      localStorage.setItem('theme', theme);
    });
  });

  // Function to set the theme based on system preference
  const setThemeFromPreference = () => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.dataset.theme = prefersDark ? 'dark' : 'light';
  };

  // Check for system preference initially
  setThemeFromPreference();

  // Listen for changes in system preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setThemeFromPreference);
if (window.matchMedia) {
    // Dark mode query
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
    // Function to handle theme change
    const handleThemeChange = (e) => {
        if (e.matches) {
            // Dark mode is enabled
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
        } else {
            // Dark mode is not enabled
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
        }
    };
  
    // Initial check
    handleThemeChange(darkModeQuery);
  
    // Add event listener for theme change
    darkModeQuery.addListener(handleThemeChange);
  
    // Button click event listeners
    const themeButtons = document.querySelectorAll('.theme-button');
  
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.dataset.theme;
            document.body.classList.remove('dark-theme', 'light-theme');
            document.body.classList.add(theme + '-theme');
        });
    });
}
const toggleBtn = document.querySelector(".toggle-btn");

// Check the initial setting based on user preference
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  toggleBtn.classList.add("dark-mode");
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  toggleBtn.classList.toggle("dark-mode");

  // Save user preference to local storage
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
}

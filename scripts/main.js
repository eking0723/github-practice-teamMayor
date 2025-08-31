function toggleDarkMode() {
  const body = document.body;
  const button = document.querySelector(".toggle-btn");

  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    button.textContent = "Light Mode"; // when dark mode is active
  } else {
    button.textContent = "Dark Mode"; // when back to light mode
  }
}

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));   
        link.classList.add('active'); 
    });
});
function toggleDarkMode() {
  const body = document.body;
  const button = document.querySelector(".toggle-btn");

  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    button.textContent = "Light Mode"; 
  } else {
    button.textContent = "Dark Mode";
  }
}

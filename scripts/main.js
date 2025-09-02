const navLinks = document.querySelectorAll('nav a');

function hideAllSections() {
    const sectionsToHide = ['homeSection', 'aboutSection', 'contactFormSection'];
    sectionsToHide.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'none';
        }
    });
};


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


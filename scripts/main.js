const navLinks = document.querySelectorAll('nav a');

function hideAllSections() {
    const sectionsToHide = ['homeSection', 'aboutSection', 'contactFormSection'];
    sectionsToHide.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'none';
        }
    });
<<<<<<< Updated upstream
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
=======
}

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        navLinks.forEach(l => l.classList.remove('active'));   
        
        link.classList.add('active');
        
        hideAllSections();

        if (link.id === 'homeLink') {
            document.getElementById('homeSection').style.display = 'block';
        } else if (link.id === 'aboutLink') {
            document.getElementById('aboutSection').style.display = 'block';
        } else if (link.id === 'contactLink') {
            document.getElementById('contactFormSection').style.display = 'block';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    hideAllSections();
    document.getElementById('homeSection').style.display = 'block';
    document.getElementById('homeLink').classList.add('active');
});
>>>>>>> Stashed changes

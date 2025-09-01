
function hideAllSections() {
    // Select all sections that are part of our page navigation
    const sectionsToHide = document.querySelectorAll('#homeSection, #aboutSection, #contactFormSection');
    sectionsToHide.forEach(section => {
        section.style.display = 'none';
    });
}

function showSection(sectionId) {
    hideAllSections();
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show the correct section based on the link's ID
            if (this.id === 'homeLink') {
                showSection('homeSection');
            } else if (this.id === 'aboutLink') {
                showSection('aboutSection');
            } else if (this.id === 'contactLink') {
                showSection('contactFormSection'); // This shows your form
            }
        });
    });
}

function initPage() {
    // Hide all sections first
    hideAllSections();
    // Show only the home section by default
    showSection('homeSection');
    // Activate the home link
    document.getElementById('homeLink').classList.add('active');
    // Set up the navigation event listeners
    setupNavigation();
}

document.addEventListener('DOMContentLoaded', initPage);

// scripts/contact.js
const form = document.querySelector('#contactFormSection form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  // Show loading state
  submitBtn.classList.add('btn-loading');
  submitBtn.disabled = true;
  
  // Simulate network delay (2 seconds)
  setTimeout(() => {
    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log('Form would submit:', data);
    
    // Show success message
    showSuccessMessage();
    
    // Reset form and button state
    form.reset();
<<<<<<< Updated upstream
    submitBtn.classList.remove('btn-loading');
    submitBtn.disabled = false;
    
  }, 2000);
});

function showSuccessMessage() {
  // Create or show success message
  let successDiv = document.querySelector('.success-message');
  
  if (!successDiv) {
    successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
      <i class="fas fa-check-circle"></i>
      <p><strong>Message Sent!</strong> Thank you for contacting us. We'll get back to you soon.</p>
    `;
    form.parentNode.insertBefore(successDiv, form);
  }
  
  successDiv.style.display = 'block';
  
  // Auto-hide after 5 seconds
  setTimeout(() => {
    successDiv.style.display = 'none';
  }, 5000);
}

/*
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log(data);
        alert('Form submitted successfully!');
        form.reset();
    });
}
*/
=======
});
>>>>>>> Stashed changes

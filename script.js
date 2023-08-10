// JavaScript Code (Optional)

// Add smooth scrolling to anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
for (let link of anchorLinks) {
  link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  const targetId = this.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  const targetOffset = targetElement.offsetTop;

  window.scrollTo({
    top: targetOffset,
    behavior: 'smooth'
  });
}

// Handle form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();

  const nameInput = document.getElementById('nameInput');
  const emailInput = document.getElementById('emailInput');
  const messageInput = document.getElementById('messageInput');

  // Perform form validation and submit data to the server
  // ...

  // Clear form inputs
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';

  // Show success message to the user
  alert('Thank you! Your message has been sent.');
}

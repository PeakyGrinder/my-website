document.addEventListener('DOMContentLoaded', function() {
  // Add any JavaScript functionality here, such as form validation or animations
  const form = document.querySelector('form');
  
  form.addEventListener('submit', function(event) {
    // Basic form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Clear any previous error messages
    clearErrors();

    // Check if all fields are filled
    if (!name || !email || !message) {
      event.preventDefault();
      displayError("Please fill out all fields before submitting.");
      return;
    }

    // Validate email format (simple regex)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      event.preventDefault();
      displayError("Please enter a valid email address.");
      return;
    }
    
    // Optional: Clear the form after successful submission
    // form.reset();
  });

  // Function to display error messages
  function displayError(message) {
    const errorContainer = document.createElement('div');
    errorContainer.classList.add('error-message');
    errorContainer.textContent = message;
    
    // Insert the error message before the form
    const formContainer = document.querySelector('#contact');
    formContainer.insertBefore(errorContainer, form);
  }

  // Function to clear previous error messages
  function clearErrors() {
    const existingError = document.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }
  }
});

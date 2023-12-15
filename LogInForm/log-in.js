document.addEventListener('DOMContentLoaded', function () {
  // Function to validate email format
  function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  }

  // Function to handle form submission
  function handleFormSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Select the email and password input fields
    var email = document.querySelector('.emailContainer input').value;
    var password = document.querySelector('.passwordContainer input').value;

    // Basic validation
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Here you can add your code to handle the sign-in logic, 
    // like sending a request to your server
    console.log('Email:', email, 'Password:', password);
    alert('Sign-in successful!');  // Placeholder for demonstration

    // Clear the form fields
    document.querySelector('.emailContainer input').value = '';
    document.querySelector('.passwordContainer input').value = '';
  }

  // Add event listener to the form
  var form = document.querySelector('.formContentContainer');
  form.addEventListener('submit', handleFormSubmit);
});

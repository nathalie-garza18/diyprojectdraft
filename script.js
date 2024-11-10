// Handle form submission for account creation
document.getElementById('create-account-form').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent form submission

  // Get the values entered by the user
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const age = document.getElementById('age').value;
  const familyHistory = document.getElementById('family-history').value;

  // Check if passwords match
  if (password !== confirmPassword) {
    document.getElementById('error-message').textContent = 'Passwords do not match. Please try again.';
    return;
  }

  // Validate age
  if (age < 18) {
    document.getElementById('error-message').textContent = 'You must be at least 18 years old to create an account.';
    return;
  }

  // Store user data including demographic info
  const userInfo = {
    username: username,
    password: password,
    age: age,
    familyHistory: familyHistory
  };

  localStorage.setItem('userInfo', JSON.stringify(userInfo));

  // Display success message
  alert('Account successfully created!');

  // Optionally, redirect the user to the login page (if you have one)
  // window.location.href = 'login.html'; // Redirect to login page (if you have one)
});

const loginForm = document.getElementById('login-form');
const loginMessage = document.getElementById('login-message');

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Clear any previous messages
  loginMessage.textContent = '';

  try {
    // Simulate user authentication logic (replace with actual validation)
    const simulatedCredentials = {
      email: 'valid_email@example.com', // Replace with actual logic
      password: 'correct_password' // Replace with actual logic
    };

    if (email === simulatedCredentials.email && password === simulatedCredentials.password) {
      // Redirect to home page on successful login
      window.location.href = 'https://beasmeraraabwasda.github.io/home';
    } else {
      loginMessage.textContent = 'Wrong credentials. Please try again.';
    }
  } catch (error) {
    console.error(error);
    loginMessage.textContent = 'An error occurred. Please try again.';
  }
});

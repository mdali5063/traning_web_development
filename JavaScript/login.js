const form = document.getElementById('login-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  // Send a request to the backend to authenticate the user
  // For now, we'll just log the credentials to the console
  console.log(`Username: ${username}, Password: ${password}`);
});
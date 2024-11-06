// Get elements
const registerButton = document.getElementById('registerButton');
const loginButton = document.getElementById('loginButton');
const registerFormDiv = document.getElementById('registerFormDiv');
const loginFormDiv = document.getElementById('loginFormDiv');
const miningSection = document.getElementById('miningSection');
const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');

// Show the registration form
registerButton.addEventListener('click', () => {
    registerFormDiv.style.display = 'block';
    loginFormDiv.style.display = 'none';
});

// Show the login form
loginButton.addEventListener('click', () => {
    loginFormDiv.style.display = 'block';
    registerFormDiv.style.display = 'none';
});

// Handle register form submission
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // You can add form validation here

    // Hide registration form and show mining section
    registerFormDiv.style.display = 'none';
    miningSection.style.display = 'block';
    alert("Registration Successful! You can now start mining.");
});

// Handle login form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // You can add login validation here

    // Hide login form and show mining section
    loginFormDiv.style.display = 'none';
    miningSection.style.display = 'block';
    alert("Login Successful! You can now start mining.");
});

// Optionally add a button to start mining
const startMiningButton = document.getElementById('startMiningButton');
startMiningButton.addEventListener('click', () => {
    alert("Mining Started!");
});

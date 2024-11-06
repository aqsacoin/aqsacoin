// Display the registration form when the "Register" button is clicked
document.getElementById('registerButton').addEventListener('click', function() {
    document.getElementById('registerFormDiv').style.display = 'block';
    document.getElementById('loginFormDiv').style.display = 'none';  // Hide the login form
});

// Display the login form when the "Login" button is clicked
document.getElementById('loginButton').addEventListener('click', function() {
    document.getElementById('loginFormDiv').style.display = 'block';
    document.getElementById('registerFormDiv').style.display = 'none';  // Hide the registration form
});

// Handle registration form submission
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the form from reloading the page

    // Get the form values
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // For demonstration purposes, log the values (in real applications, you would send these values to a server)
    console.log('Username: ' + username);
    console.log('Email: ' + email);
    console.log('Password: ' + password);

    // Simulate successful registration
    alert('Registration successful! Welcome, ' + username);

    // Redirect to login page after successful registration
    window.location.href = "login.html";  // You can change this to any page you want
});

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the form from reloading the page

    // Get the form values
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // For demonstration purposes, log the values (in real applications, you would send these values to a server)
    console.log('Email: ' + email);
    console.log('Password: ' + password);

    // Simulate successful login
    alert('Login successful! Welcome back.');

    // Redirect to home page after successful login
    window.location.href = "index.html";  // You can change this to any page you want
});

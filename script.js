// Handle registration form submission
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Get the values from the input fields
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Display the values in the console (or you can use them to send to a server)
    console.log('Username: ' + username);
    console.log('Email: ' + email);
    console.log('Password: ' + password);

    // Simulate form submission success (in a real-world case, you would send this data to a backend)
    alert('Registration successful! Welcome, ' + username);

    // Redirect the user to a new page after successful registration
    window.location.href = "login.html"; // Redirect to the login page after registration
});

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Get the values from the input fields
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Display the values in the console (or you can use them to send to a server)
    console.log('Email: ' + email);
    console.log('Password: ' + password);

    // Simulate login success (in a real-world case, you would send this data to a backend)
    alert('Login successful! Welcome back.');

    // Redirect the user to the home page after successful login
    window.location.href = "index.html"; // Redirect to the home page after login
});

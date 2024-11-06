// Handle the Register Button click
document.getElementById('registerButton').addEventListener('click', function() {
    // Show the registration form
    document.getElementById('registerForm').style.display = 'block';
});

// Handle the registration form submission
document.getElementById('registerFormData').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the input values from the form
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Store the data (for now we will use localStorage for simplicity)
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Show confirmation message
    document.getElementById('message').textContent = 'Registration successful! You can now log in.';

    // Clear the form and hide it
    document.getElementById('registerForm').reset();
    document.getElementById('registerForm').style.display = 'none';
});

// Handle Login Button click
document.getElementById('loginButton').addEventListener('click', function() {
    // Assuming login is successful for now
    if (localStorage.getItem('username')) {
        alert('Login successful!');
    } else {
        alert('Please register first!');
    }
});

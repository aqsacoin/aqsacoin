// Get elements
const registerButton = document.getElementById('registerButton');
const loginButton = document.getElementById('loginButton');
const startMiningButton = document.getElementById('startMiningButton');
const coinBalanceElement = document.getElementById('coinBalance');
const miningTimeLeftElement = document.getElementById('miningTimeLeft');

// Load user data from localStorage if available
let coinBalance = parseInt(localStorage.getItem('coinBalance')) || 0; // Default to 0 if no data
let miningTimer;
let miningDuration = 24 * 60 * 60; // 24 hours for mining (in seconds) = 86400 seconds
let remainingTime = parseInt(localStorage.getItem('remainingTime')) || miningDuration; // Get remaining time from localStorage

// Display initial coin balance
coinBalanceElement.textContent = coinBalance;

// Display mining time if there was any previous mining session
updateMiningTimer(remainingTime);

// Check if the user is already logged in
if (localStorage.getItem('isLoggedIn') === 'true') {
    // User is logged in, show mining section
    showMiningSection();
} else {
    // User is not logged in, show login/register buttons
    showLoginRegisterSection();
}

// Event listener for the "Register" button
registerButton.addEventListener('click', function() {
    const username = prompt("Enter your username for registration:");
    const password = prompt("Enter your password for registration:");

    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert("Registration successful!");
        showLoginRegisterSection(); // Switch to login screen after registration
    } else {
        alert("Both fields are required.");
    }
});

// Event listener for the "Login" button
loginButton.addEventListener('click', function() {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    const username = prompt("Enter your username to login:");
    const password = prompt("Enter your password to login:");

    if (username === storedUsername && password === storedPassword) {
        localStorage.setItem('isLoggedIn', 'true');
        alert("Login successful!");
        showMiningSection(); // Show mining section after login
    } else {
        alert("Incorrect username or password.");
    }
});

// Function to show the mining section
function showMiningSection() {
    document.querySelector('.user-actions').style.display = 'none';
    document.querySelector('.dashboard').style.display = 'flex';

    // Start mining if there's remaining time
    if (remainingTime > 0) {
        startMining();
    }
}

// Function to show the login/register section
function showLoginRegisterSection() {
    document.querySelector('.user-actions').style.display = 'block';
    document.querySelector('.dashboard').style.display = 'none';
}

// Event listener for the "Start Mining" button
startMiningButton.addEventListener('click', function() {
    startMining();
});

// Start Mining Function
function startMining() {
    // Disable the button during mining
    startMiningButton.disabled = true;

    let remainingTime = parseInt(localStorage.getItem('remainingTime')) || miningDuration;
    updateMiningTimer(remainingTime);

    miningTimer = setInterval(function() {
        remainingTime--;
        updateMiningTimer(remainingTime);

        // Save the remaining time to localStorage
        localStorage.setItem('remainingTime', remainingTime);

        if (remainingTime <= 0) {
            clearInterval(miningTimer);
            coinBalance += 3; // Add 3 coins after mining is complete
            coinBalanceElement.textContent = coinBalance;
            localStorage.setItem('coinBalance', coinBalance); // Save updated coin balance
            startMiningButton.disabled = false; // Enable the button
            localStorage.removeItem('remainingTime'); // Clear remaining time after mining is complete
            alert("Mining completed! You earned 3 coins.");
        }
    }, 1000);
}

// Update Mining Timer Function
function updateMiningTimer(timeInSeconds) {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    miningTimeLeftElement.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

// Helper function to format time to two digits
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

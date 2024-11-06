// Get elements
const registerButton = document.getElementById('registerButton');
const loginButton = document.getElementById('loginButton');
const registerFormDiv = document.getElementById('registerFormDiv');
const loginFormDiv = document.getElementById('loginFormDiv');
const userDetailsDiv = document.getElementById('userDetails');
const loginRegisterDiv = document.getElementById('loginRegister');
const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
const startMiningButton = document.getElementById('startMiningButton');
const logoutButton = document.getElementById('logoutButton');
const coinBalance = document.getElementById('coinBalance');
const miningTime = document.getElementById('miningTime');
const usernameDisplay = document.getElementById('username');
const walletAddress = document.getElementById('walletAddress');

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

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('coins', 0); // Set initial coins to 0
        localStorage.setItem('miningTimeLeft', 1440); // 24 hours in minutes
        alert("Registration successful! You can now log in.");
    }
});

// Handle login form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (loginUsername === savedUsername && loginPassword === savedPassword) {
        localStorage.setItem('loggedIn', true);
        window.location.reload();
    } else {
        alert("Invalid credentials.");
    }
});

// Handle logout
logoutButton.addEventListener('click', () => {
    localStorage.removeItem('loggedIn');
    window.location.reload();
});

// Show user details if logged in
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (isLoggedIn) {
        const username = localStorage.getItem('username');
        const coins = localStorage.getItem('coins');
        const miningTimeLeft = localStorage.getItem('miningTimeLeft');

        usernameDisplay.textContent = username;
        coinBalance.textContent = coins;
        walletAddress.textContent = `0x${Math.random().toString(36).substr(2, 42)}`; // Fake wallet address
        miningTime.textContent = formatTime(miningTimeLeft);

        userDetailsDiv.style.display = 'block';
        loginRegisterDiv.style.display = 'none';
    } else {
        userDetailsDiv.style.display = 'none';
        loginRegisterDiv.style.display = 'block';
    }
}

// Format time in minutes to HH:MM
function formatTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
}

// Start mining functionality
startMiningButton.addEventListener('click', () => {
    let miningTimeLeft = parseInt(localStorage.getItem('miningTimeLeft'));

    if (miningTimeLeft > 0) {
        const miningInterval = setInterval(() => {
            miningTimeLeft--;
            localStorage.setItem('miningTimeLeft', miningTimeLeft);
            miningTime.textContent = formatTime(miningTimeLeft);

            if (miningTimeLeft <= 0) {
                clearInterval(miningInterval);
                let coins = parseInt(localStorage.getItem('coins'));
                coins += 3; // Add 3 coins for mining
                localStorage.setItem('coins', coins);
                coinBalance.textContent = coins;
                alert("Mining complete! You earned 3 coins.");
            }
        }, 60000); // Update every minute
    }
});

// Run on page load
window.onload = checkLoginStatus;

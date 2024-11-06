// Global Variables
let isMining = false;
let miningInterval;
let miningTime = 86400; // 24 hours in seconds

// Event Listeners for Buttons
document.getElementById('registerButton').addEventListener('click', function() {
    alert('You clicked Register button!');
    // Implement registration functionality here
});

document.getElementById('loginButton').addEventListener('click', function() {
    alert('You clicked Login button!');
    // Implement login functionality here
});

document.getElementById('generateWalletButton').addEventListener('click', function() {
    generateWallet();
});

document.getElementById('restoreWalletButton').addEventListener('click', function() {
    restoreWallet();
});

document.getElementById('startMiningButton').addEventListener('click', function() {
    startMining();
});

// Function to generate wallet with 12 recovery words
function generateWallet() {
    let recoveryWords = generateRecoveryWords();
    alert('Your wallet has been created with the following recovery words:\n' + recoveryWords);
    document.getElementById('walletAddress').innerText = 'Your address: ' + generateRandomAddress();
    document.getElementById('walletBalance').innerText = 'Balance: 0 Coins';
}

// Function to restore wallet using recovery words
function restoreWallet() {
    let recoveryWords = prompt('Please enter your recovery words to restore your wallet:');
    alert('Your wallet has been restored!');
    // Implement wallet restoration logic here
    document.getElementById('walletAddress').innerText = 'Your address: ' + generateRandomAddress();
}

// Function to start mining
function startMining() {
    if (isMining) {
        alert('Mining is already in progress!');
        return;
    }

    isMining = true;
    document.getElementById('miningStatus').innerText = 'Mining in progress...';
    startMiningTimer();
}

// Function to start mining timer (24 hours)
function startMiningTimer() {
    miningInterval = setInterval(function() {
        if (miningTime <= 0) {
            clearInterval(miningInterval);
            document.getElementById('miningStatus').innerText = 'Mining Completed!';
            document.getElementById('walletBalance').innerText = 'Balance: ' + (parseInt(document.getElementById('walletBalance').innerText.split(' ')[1]) + 3) + ' Coins';
            isMining = false;
        } else {
            miningTime--;
            updateMiningTimerDisplay();
        }
    }, 1000);
}

// Function to update mining timer display
function updateMiningTimerDisplay() {
    let hours = Math.floor(miningTime / 3600);
    let minutes = Math.floor((miningTime % 3600) / 60);
    let seconds = miningTime % 60;

    document.getElementById('miningTimer').innerText = 'Time Remaining: ' + formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

// Function to format time as two digits
function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

// Utility function to generate 12 random recovery words (for demonstration)
function generateRecoveryWords() {
    let words = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew', 'kiwi', 'lemon', 'mango', 'nectarine'];
    let recoveryWords = [];
    for (let i = 0; i < 12; i++) {
        let randomIndex = Math.floor(Math.random() * words.length);
        recoveryWords.push(words[randomIndex]);
    }
    return recoveryWords.join(' ');
}

// Utility function to generate a random wallet address
function generateRandomAddress() {
    return '0x' + Math.random().toString(36).substring(2, 15);
}

// Simulate a simple wallet system and mining process

// Simulate a wallet object
let wallet = {
    address: generateWalletAddress(),
    balance: 0,
    mining: false,
    miningInterval: null,
};

// Register and Login Buttons
document.getElementById("registerButton").addEventListener("click", function() {
    alert("Registration feature is not implemented yet.");
});

document.getElementById("loginButton").addEventListener("click", function() {
    alert("Login feature is not implemented yet.");
});

// Display wallet info
function displayWallet() {
    document.getElementById("wallet").style.display = "block";
    document.getElementById("walletAddress").innerText = wallet.address;
    document.getElementById("walletBalance").innerText = wallet.balance;
}

// Simulate mining function
function startMining() {
    if (wallet.mining) {
        alert("Mining is already in progress.");
        return;
    }

    wallet.mining = true;
    document.getElementById("mineButton").innerText = "Stop Mining";

    wallet.miningInterval = setInterval(function() {
        wallet.balance += 3; // Mining 3 coins every interval
        document.getElementById("walletBalance").innerText = wallet.balance;
    }, 1000); // Every 1 second simulates mining for testing
}

// Stop Mining
function stopMining() {
    wallet.mining = false;
    clearInterval(wallet.miningInterval);
    document.getElementById("mineButton").innerText = "Start Mining";
}

// Mining button functionality
document.getElementById("mineButton").addEventListener("click", function() {
    if (wallet.mining) {
        stopMining();
    } else {
        startMining();
    }
});

// Utility to generate a random wallet address (For demonstration only)
function generateWalletAddress() {
    return '0x' + Math.random().toString(36).substr(2, 16); // Random address generator
}

// Call display wallet function to show wallet details on load
displayWallet();

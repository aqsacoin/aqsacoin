// محاكاة البيانات للمحفظة
let walletAddress = "0x1234567890abcdef1234567890abcdef";
let coinBalance = 0;

// تحديث واجهة المحفظة
document.getElementById("walletAddress").innerText = walletAddress;
document.getElementById("coinBalance").innerText = coinBalance;

// التوقيت للمعدن
let miningTimer = 0;
let miningInterval;

function startMining() {
    miningInterval = setInterval(function() {
        miningTimer++;
        let hours = Math.floor(miningTimer / 3600);
        let minutes = Math.floor((miningTimer % 3600) / 60);
        let seconds = miningTimer % 60;

        document.getElementById("miningTimer").innerText =
            `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }, 1000);
}

document.getElementById("mineButton").addEventListener("click", function() {
    startMining();
});

// أزرار التسجيل والدخول
document.getElementById("registerButton").addEventListener("click", function() {
    alert("Register button clicked");
});

document.getElementById("loginButton").addEventListener("click", function() {
    alert("Login button clicked");
});

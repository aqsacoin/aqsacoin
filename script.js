// Script.js

// تأكد من تسجيل الدخول عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('loggedIn') === 'true') {
        showUserDashboard();
    }
});

// تسجيل الدخول
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // تخزين بيانات تسجيل الدخول في localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('loggedIn', 'true');
        showUserDashboard();
    } else {
        alert('Please fill in all fields');
    }
}

// تسجيل الخروج
function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('loggedIn');
    hideUserDashboard();
}

// إظهار واجهة المستخدم بعد تسجيل الدخول
function showUserDashboard() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('userDashboard').style.display = 'block';
    document.getElementById('usernameDisplay').textContent = localStorage.getItem('username');
    document.getElementById('coinBalance').textContent = "0"; // أو قيمة من محفظتك
    document.getElementById('walletAddress').textContent = generateWalletAddress();
}

// إخفاء واجهة المستخدم بعد تسجيل الخروج
function hideUserDashboard() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('userDashboard').style.display = 'none';
}

// إنشاء عنوان محفظة وهمي
function generateWalletAddress() {
    return '0x' + Math.random().toString(36).substr(2, 42);
}

// وظيفة بدء التعدين
function startMining() {
    let miningTimeLeft = 1440; // 1440 دقيقة (24 ساعة)
    const miningInterval = setInterval(function() {
        if (miningTimeLeft > 0) {
            miningTimeLeft--;
            document.getElementById('miningTimer').textContent = `Time left: ${miningTimeLeft} minutes`;
        } else {
            clearInterval(miningInterval);
            alert('Mining completed! You earned 3 coins.');
            // إضافة 3 عملات إلى رصيد المستخدم
            let coinBalance = parseInt(document.getElementById('coinBalance').textContent);
            document.getElementById('coinBalance').textContent = coinBalance + 3;
        }
    }, 60000); // كل دقيقة
}

// تحقق إذا كان المستخدم قد سجل الدخول قبل التفاعل
if (localStorage.getItem('loggedIn') === 'true') {
    showUserDashboard();
}

// إضافة أحداث الأزرار
document.getElementById('loginButton').addEventListener('click', login);
document.getElementById('logoutButton').addEventListener('click', logout);
document.getElementById('startMiningButton').addEventListener('click', startMining);

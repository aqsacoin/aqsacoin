// تعريف المتغيرات
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const miningSection = document.getElementById('miningSection');

// دالة لإظهار نموذج التسجيل
function showRegisterForm() {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
    miningSection.style.display = 'none';
}

// دالة لإظهار نموذج تسجيل الدخول
function showLoginForm() {
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
    miningSection.style.display = 'none';
}

// دالة لإظهار قسم التعدين
function showMiningSection() {
    registerForm.style.display = 'none';
    loginForm.style.display = 'none';
    miningSection.style.display = 'block';
}

// دالة للتسجيل
function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (username && password) {
        alert('تم التسجيل بنجاح!');
        showMiningSection();
    } else {
        alert('يرجى إدخال جميع البيانات.');
    }
}

// دالة لتسجيل الدخول
function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (username && password) {
        alert('تم تسجيل الدخول بنجاح!');
        showMiningSection();
    } else {
        alert('يرجى إدخال اسم المستخدم وكلمة المرور.');
    }
}

// دالة التعدين
function mineCoin() {
    alert('تم بدء التعدين!');
}

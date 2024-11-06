const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

// توليد المحفظة (عند الضغط على زر "Generate Wallet")
function generateWallet() {
    const mnemonic = bip39.generateMnemonic(); // توليد 12 كلمة استرداد
    const seed = bip39.mnemonicToSeedSync(mnemonic); // تحويل الكلمات إلى seed
    const keyPair = bitcoin.ECPair.fromSeed(seed); // توليد المفاتيح
    const address = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey }).address; // العنوان العام
    const privateKey = keyPair.toWIF(); // المفتاح الخاص

    // عرض المعلومات للمستخدم
    document.getElementById('recoveryPhrase').innerText = mnemonic;
    document.getElementById('address').innerText = address;
    document.getElementById('privateKey').innerText = privateKey;
    
    // إظهار المعلومات للمستخدم
    document.getElementById('walletInfo').style.display = 'block';
}

// في حالة استعادة المحفظة من الكلمات
function restoreWallet(mnemonic) {
    const seed = bip39.mnemonicToSeedSync(mnemonic);
    const keyPair = bitcoin.ECPair.fromSeed(seed);
    const address = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey }).address;
    const privateKey = keyPair.toWIF();

    // عرض المحفظة المستعادة
    document.getElementById('address').innerText = address;
    document.getElementById('privateKey').innerText = privateKey;
    document.getElementById('walletInfo').style.display = 'block';
}

// إدارة أحداث الأزرار
document.getElementById('generateBtn').addEventListener('click', function() {
    generateWallet();
});

document.getElementById('restoreBtn').addEventListener('click', function() {
    const mnemonic = prompt('Enter your 12-word recovery phrase:');
    restoreWallet(mnemonic);
});

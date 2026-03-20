// auth.js
function handleLogin(mobile) {
    if(mobile.length === 10) {
        localStorage.setItem('userLoggedIn', 'true');
        alert("Welcome to Vanya Trends!");
        location.reload(); // Page refresh karke features unlock kar dega
    } else {
        alert("Please enter a valid 10-digit number");
    }
}

function isUserActive() {
    return localStorage.getItem('userLoggedIn') === 'true';
}

// js/auth.js

// Check login status function
function checkLogin(productName) {
    let isLoggedIn = localStorage.getItem('vanya_user_logged_in');

    if (isLoggedIn === 'true') {
        addToCart(productName);
    } else {
        // Agar login nahi hai toh Modal dikhao
        showLoginModal();
    }
}

function showLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function handleLogin() {
    let phone = document.getElementById('userPhone').value;
    if (phone.length === 10) {
        localStorage.setItem('vanya_user_logged_in', 'true');
        localStorage.setItem('vanya_user_phone', phone);
        alert("Login Successful! Now you can shop.");
        location.reload(); // Page refresh to unlock features
    } else {
        alert("Please enter a valid 10-digit number");
    }
}

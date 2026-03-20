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

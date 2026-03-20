function filterCategory(category) {
    const cards = document.getElementsByClassName('product-card');
    const buttons = document.getElementsByClassName('tab-btn');

    // Button active state change
    for (let btn of buttons) {
        btn.classList.remove('active');
        if (btn.innerText.toLowerCase().includes(category)) {
            btn.classList.add('active');
        }
    }
    if(category === 'all') buttons[0].classList.add('active');

    // js/products.js

function addToCart(item) {
    // Premium feel ke liye ek alert ya notification
    alert(item + " has been added to your cart!");
    
    // Auto-redirect to WhatsApp for order (Optional but good for Suraj)
    let message = "Hi Vanya Trends, I want to order: " + item;
    window.open("https://wa.me/919812998132?text=" + encodeURIComponent(message));
}

    // Filter Logic
    for (let card of cards) {
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            if (card.classList.contains(category)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    }
}

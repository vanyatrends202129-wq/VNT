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

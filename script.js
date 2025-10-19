function updateTime() {
    const timeElement = document.querySelector('[data-testid="test-user-time"]');
    if (timeElement) {
        timeElement.textContent = Date.now();
    }
}

function initProfileCard() {
    updateTime();


    setInterval(updateTime, 1000);

    const avatarImg = document.querySelector('[data-testid="test-user-avatar"]');
    if (avatarImg) {
        avatarImg.addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/400x400/667eea/ffffff?text=Profile';
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProfileCard);
} else {
    initProfileCard();
}
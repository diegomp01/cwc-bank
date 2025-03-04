const tabButtons = document.querySelectorAll('.tab-button');
const tabIndicator = document.querySelector('.tab-button-indicator');
const debitoCard = document.getElementById('debitoCard');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        button.classList.add('active');

        // Move indicator
        const buttonIndex = Array.from(tabButtons).indexOf(button);
        tabIndicator.style.width = `${button.offsetWidth}px`;
        tabIndicator.style.left = `${buttonIndex * button.offsetWidth}px`;

        // Add fade animations
        debitoCard.classList.add('fade-out');
        setTimeout(() => {
            debitoCard.classList.remove('fade-out');
            debitoCard.classList.add('fade-in');
        }, 300);
    });
});
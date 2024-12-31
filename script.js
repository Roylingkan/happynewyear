document.getElementById('celebrateBtn').addEventListener('click', function () {
    const button = document.getElementById('celebrateBtn');
    const heading = document.getElementById('mainHeading');
    const message = document.getElementById('message');
    const fireworks = document.getElementById('fireworks');
    const audio = document.getElementById('wishAudio');

    // Shrink the button and move it to the center
    button.classList.add('shrink');
    setTimeout(() => {
        button.classList.add('move-center');
    }, 1000);

    // Wait for the button animation
    setTimeout(() => {
        button.style.display = 'none'; // Hide the button

        // Fireworks animation scattering from the center
        for (let i = 0; i < 100; i++) {
            const firework = document.createElement('div');
            firework.classList.add('firework');
            const angle = Math.random() * 2 * Math.PI; // Random angle
            const distance = Math.random() * 500; // Random distance
            firework.style.setProperty('--x', `${Math.cos(angle) * distance}px`);
            firework.style.setProperty('--y', `${Math.sin(angle) * distance}px`);
            firework.style.left = '50%';
            firework.style.top = '50%';
            firework.style.backgroundColor = getRandomColor();
            firework.style.animationDuration = `${Math.random() * 2 + 1}s`;
            fireworks.appendChild(firework);
        }

        // Show "Happy New Year" message
        heading.textContent = 'Happy New Year 2025!';
        heading.style.opacity = 1;
        message.textContent = '"Wishing you a year full of happiness, success, and peace!"';

        // Play sound effect
        audio.play();

        // Clear fireworks after 10 seconds
        setTimeout(() => {
            fireworks.innerHTML = '';
        }, 10000);
    }, 2000);
});

// Helper function to get random colors for fireworks
function getRandomColor() {
    const colors = ['#ff4500', '#ffd700', '#00ff00', '#1e90ff', '#ff69b4'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Visitor Counter using localStorage
const viewerCountElement = document.getElementById('viewerCount');
let viewerCount = localStorage.getItem('viewerCount') || 0;
viewerCount++;
localStorage.setItem('viewerCount', viewerCount);
viewerCountElement.textContent = `Visitors: ${viewerCount}`;
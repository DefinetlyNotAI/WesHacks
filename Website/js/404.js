const gameText = document.getElementById('game-text');
let colorValue = 0;

setTimeout(() => {
    setInterval(() => {
        colorValue = (colorValue + 1) % 256;
        if (colorValue < 245) {
            gameText.style.color = `rgb(255, ${Math.max(0, 255 - colorValue)}, ${Math.max(0, 255 - colorValue)})`;
        }
    }, 50);
}, 10000);


if (Math.random() < 0.05) {
    const secretButton = document.createElement('a');
    secretButton.className = 'button';
    secretButton.href = '/Website/ESCAPE.html';
    secretButton.textContent = 'Hmm how did this secret button get here?';
    document.querySelector('.container').appendChild(secretButton);
}

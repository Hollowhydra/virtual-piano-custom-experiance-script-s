// By Dubbly (fixed)
function generateRandomColor() {
    const minBrightness = 100; // change for darker or brigher colors

    const r = Math.floor(Math.random() * (256 - minBrightness) + minBrightness);
    const g = Math.floor(Math.random() * (256 - minBrightness) + minBrightness);
    const b = Math.floor(Math.random() * (256 - minBrightness) + minBrightness);

    return [r, g, b];
}

function applyRandomColorEffect() {
    const [r, g, b] = generateRandomColor();
    user_color = `${r}, ${g}, ${b}`; // labels r g b format and correts ui

    // start color right away to prevent black color lock in chat
    document.documentElement.style.setProperty('--user-color', `rgb(${r}, ${g}, ${b})`);

    // helps label black locked fill color, if locked, color will change
    const messageBox = document.querySelector('.message-box');
    if (messageBox) {
        messageBox.style.color = `rgb(${r}, ${g}, ${b})`;
    }
}

// 1000ms = 1 second
setInterval(applyRandomColorEffect, 200);

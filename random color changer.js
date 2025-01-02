 // by Dubbly
function randomColor() {
    const r = Math.floor(Math.random() * 256); // Random value between 0 and 255
    const g = Math.floor(Math.random() * 256); // Random value between 0 and 255
    const b = Math.floor(Math.random() * 256); // Random value between 0 and 255
    return [r, g, b];
}

function gostraight() {
    for (let i = 0; i < 10; i++) {
        const rgb = randomColor(); // Use the randomColor function
        user_color = rgb; // Assign the random color to user_color
    }
}

setInterval(gostraight, 200);

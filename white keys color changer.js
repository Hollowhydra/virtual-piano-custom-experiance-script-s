 // does not work just yet

// Function to change the color of a given key
function changeKeyColor(keyId, color) {
    const keyElement = document.getElementById(keyId);
    if (keyElement) {
        keyElement.setAttribute('fill', color);
    }
}

// Listen for color changes in the console
window.addEventListener('keydown', function(event) {
    // Check if the key pressed is a specific key for color change (for example, 'C' key)
    if (event.key === ';') {
        // Get the color from the user
        const color = prompt('Enter a color (e.g., red, #00FF00, rgb(0, 255, 0)):');
        // Change the color of each key
        const keyNumbers = [24, 26, 28, 29, 31, 33, 35, 36, 38, 40, 41, 43, 45, 47, 48, 50, 52, 53, 55, 57, 59, 60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84];
        keyNumbers.forEach(keyNumber => {
            changeKeyColor('key_' + keyNumber, color);
        });
    }
});

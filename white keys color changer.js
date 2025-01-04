// Function to change the color of the white piano keys
function changePianoKeyColor() {
    // Select all elements with the class 'key-white'
    const whiteKeys = document.querySelectorAll('.key-white');
    
    // Loop through each key and change its fill color
    whiteKeys.forEach(key => {
        key.setAttribute('fill', '#color_code_here'); // example could be #330F0F
 // use this website to get colors (https://www.rapidtables.com/web/color/RGB_Color.html)
        // Add event listeners to change color on press
        key.addEventListener('mousedown', () => {
            key.setAttribute('fill', '#8B0000'); // Keep  when pressed
        });

        key.addEventListener('mouseup', () => {
            key.setAttribute('fill', '#8B0000'); // Keep color when released
        });
    });
}

// Function to reapply the color to all keys (incase glitch)
function reapplyKeyColor() {
    const whiteKeys = document.querySelectorAll('.key-white');
    whiteKeys.forEach(key => {
        key.setAttribute('fill', '#8B0000'); // Dark red color (spicy red)
    });
}

// Run the function to apply the changes initially
changePianoKeyColor();

// Set up a MutationObserver to watch for changes in the keys(white_key to white_key_pressed)
const observer = new MutationObserver(reapplyKeyColor);

// Observe changes in the body or the specific container of the keys (keeps keys color)
observer.observe(document.body, {
    childList: true,
    subtree: true
});

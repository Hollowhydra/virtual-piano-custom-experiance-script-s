script by hollowhydra aka dubbly
its in testing it may not work just yet!
code:
// prevents rainbow code from auto starting
let isRainbowOn = false;
let rainbowInterval;

document.addEventListener('keydown', function(event) {
  if (event.key === '[') {
    user_meta.user_meta = !user_meta.user_meta;
    alert(`Subscriber icon is ${user_meta.user_meta ? 'on' : 'off'}`);
  }
  
  if (event.key === ']') {
    const historyInterval = setInterval(() => {
      const historyElement = document.querySelector('.piano-menu__history');
      if (historyElement) {
        const spans = historyElement.querySelectorAll('span');
        spans.forEach(span => span.remove());
      }
    }, 3000);
    // history remover in milliseconds 
    clearInterval(historyInterval);
    const milliseconds = prompt('Enter milliseconds:');
    if (milliseconds) {
      clearInterval(historyInterval);
      setInterval(() => {
        const historyElement = document.querySelector('.piano-menu__history');
        if (historyElement) {
          const spans = historyElement.querySelectorAll('span');
          spans.forEach(span => span.remove());
        }
      }, parseInt(milliseconds));
    }
  }
  
  if (event.key === '\\') { // Changed to '\' for rainbow effect toggle
    isRainbowOn = !isRainbowOn;
    if (isRainbowOn) {
      rainbowInterval = setInterval(dothegay, 200); // Changed to call dothegay function for rainbow effect
      alert("Rainbow effect is ON");
    } else {
      clearInterval(rainbowInterval);
      alert("Rainbow effect is OFF");
    }
  }

  if (event.key === ']') {
    clearInterval(historyInterval);
    const milliseconds = prompt('Enter milliseconds:');
    if (milliseconds) {
      clearInterval(historyInterval);
      setInterval(() => {
        const historyElement = document.querySelector('.piano-menu__history');
        if (historyElement) {
          const spans = historyElement.querySelectorAll('span');
          spans.forEach(span => span.remove());
        }
      }, parseInt(milliseconds));
    }
  }
});
// activaters for rainbow toggle
function gay() {
  const frequency = 0.1;
  const amplitude = 127;
  const phase1 = 0;
  const phase2 = 2 * Math.PI / 3;
  const phase3 = 4 * Math.PI / 3;
  const time = Date.now() / 200;
  const r = Math.sin(frequency * time + phase1) * amplitude + amplitude;
  const g = Math.sin(frequency * time + phase2) * amplitude + amplitude;
  const b = Math.sin(frequency * time + phase3) * amplitude + amplitude;
  return [Math.round(r), Math.round(g), Math.round(b)];
}

function dothegay() {
  for (let i = 0; i < 10; i++) {
    const rgb = gay();
    user_color = rgb;
  }
}

// Function to change the color of a given key aka white keys
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

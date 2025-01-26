 // old code: function gay() { const frequency = 0.1; const amplitude = 127; const phase1 = 0; const phase2 = 2 * Math.PI / 3; const phase3 = 4 * Math.PI / 3; const time = Date.now() / 200; const r = Math.sin(frequency * time + phase1) * amplitude + amplitude; const g = Math.sin(frequency * time + phase2) * amplitude + amplitude; const b = Math.sin(frequency * time + phase3) * amplitude + amplitude; return [Math.round(r), Math.round(g), Math.round(b)]; } function dothegay() { for (let i = 0; i < 10; i++) { const rgb = gay(); user_color = rgb } } setInterval(dothegay, 200);
 // new code:
function calculateColor() {
    const frequency = 0.1;
    const amplitude = 127;
    const time = Date.now() / 200;

    const r = Math.sin(frequency * time) * amplitude + amplitude;
    const g = Math.sin(frequency * time + (2 * Math.PI / 3)) * amplitude + amplitude;
    const b = Math.sin(frequency * time + (4 * Math.PI / 3)) * amplitude + amplitude;

    return [Math.round(r), Math.round(g), Math.round(b)];
}

function applyRainbowEffect() {
    const [r, g, b] = calculateColor();
    user_color = `${r}, ${g}, ${b}`; // Updates rainbow color
}

// starts the color changing
setInterval(applyRainbowEffect, 200);

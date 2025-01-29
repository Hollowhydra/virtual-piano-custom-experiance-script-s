 // make by Anz
function pasteAndSubmitChat() { 
    // Define the array of messages you want to send
    const messages = [
        "Blorp the quantum spatula!",
        "Huzzah for the noodly appendage.",
        "Boingy boingy, time for science.",
        "Kneel before the Pizzanator.",
        "Moo moo, the cows are coding.",
        "Jigglypuff dances with waffles.",
        "All hail the pancake overlord.",
        "Zorp zap, the alien snacks attack.",
        "Beware of the rubber chicken army.",
        "Sproink! Your toast has ascended.",
        "Wiggle waggle, the fish does taxes.",
        "Quantum bananas for everyone!",
        "Gloop glorp, the pudding is sentient.",
        "Beware the tickle ninja brigade.",
        "Flibber flabber, muffins conquer gravity.",
        "Bzzzt! The cheese is sentient now.",
        "Squawk squawk, parrots rule the moon.",
        "Fizzy biscuits for the time wizard.",
        "Zoom zap, the toast has spoken.",
        "Crinkle crunk, the ducks are spies.",
        "Plonk! The piano summoned a cat.",
        "Tinkle, tinkle, ivory keys of doom.",
        "Splat! The symphony of pancakes begins.",
        "Quack! The ducks stole the piano strings.",
        "Bang bang, Beethoven fights the toaster.",
        "Crescendo of the waffle rebellion!",
        "Flip the symphony, flap the notes.",
        "Keys of chaos, the piano weeps.",
        "Waffles jam with jazz-playing dolphins.",
        "Zig zag, the pancake sings soprano.",
        "Chords of muffins ignite the sky.",
        "Thud! The piano demands cookies.",
        "Blam! The melody eats spaghetti.",
        "Crash, bang, pancakes fly through the notes.",
        "Tango with the talking piano bench.",
        "Wubba wubba, the pancakes play Bach.",
        "Splat! The symphony has a food fight.",
        "Notes of noodles dance on cheese.",
        "Shriek! The ducks play the wrong key.",
        "Honk honk, the piano drives away.",
        "Ding dong, the keys invite a ghost.",
        "Bloop, the quantum piano hits E minor.",
        "The concerto of chaos begins now.",
        "Flip the treble clef, ride the pancakes.",
        "Chord spaghetti falls from the sky.",
        "Plink plonk, the keys debate philosophy.",
        "Twang! The strings duel with a chicken.",
        "Squawk, Beethoven rewrites his pancake sonata.",
        "Bang crash, Mozart loses to waffles.",
        "Flat keys pancake-flip in a minor chord.",
        "Zap! The piano explodes into glitter notes."
    ];

    // Keep track of the current message index
    let currentIndex = 0;

    // Define the function to paste and submit the current message
    function sendMessage() {
        // Find the chat input field by its ID
        const chatInput = document.getElementById('chat_input');

        // Set the value of the input field to the current message
        chatInput.value = messages[currentIndex];

        // Trigger the input event to ensure the application reacts to the change
        chatInput.dispatchEvent(new Event('input', { bubbles: true }));

        // Use a more specific selector for the button
        const sendButton = document.querySelector('form#form_chat button');

        // Click the Send button to submit the chat
        if (sendButton) {
            sendButton.click();
        } else {
            console.error("Send button not found!");
        }

        // Move to the next message, looping back to the first message if necessary
        currentIndex = (currentIndex + 1) % messages.length;
    }

    // Set the interval to every 1 second (1000 milliseconds)
    setInterval(sendMessage, 1000); // editor note, setting below 100 will crash site DO NOT SET BELOW!
}

pasteAndSubmitChat();

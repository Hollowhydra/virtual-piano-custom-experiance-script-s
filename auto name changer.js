// script by Dubbly
let names = ["name here", "name here"]; // You can add or remove by adding "name here" and a , for each extra one
let currentNameIndex = 0; // reads list names

function changeName() {
    const currentName = names[currentNameIndex]; // grab name from list spot 0 onward

    // Emit the current name to the socket
    socket.emit('user name', currentName); // update name

    // Log the current name to the console
    console.log(currentName);

    // Update the index for the next iteration
    currentNameIndex = (currentNameIndex + 1) % names.length; // Move to the next name in the list
}

// timer when name will change
setInterval(changeName, 1000);

// call funnction to start program
function addName(name) {
    if (!names.includes(name)) {
        names.push(name);
    }
}

// remove name from list after its done
function removeName(name) {
    names = names.filter(n => n !== name);
}

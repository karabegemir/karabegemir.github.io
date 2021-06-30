let myImage = document.querySelector('img'); // Retrieves and stores img reference

// Switches images with onclick event handler
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');

    if(mySrc === 'images/zeljanica1.jpeg') {
        myImage.setAttribute('src', 'images/zeljanica2.jpeg');
    } else {
        myImage.setAttribute('src', 'images/zeljanica1.jpeg');
    }
}

let myButton = document.querySelector('button'); // Retrieves and stores button reference
let myHeading = document.querySelector('h1'); // Retrieves and stores heading reference

// Prompts user to input their name and stores their name with a key-value pair
function setUserName() {
    let myName = prompt('Please enter your name');
    if(!myName) {
        setUserName();
    }
    localStorage.setItem('name', myName);
}

// Checks if name has already been stored, and if not, calls setUserName(); also called initialization code
if(!localStorage.getItem('name')) {
    setUserName();
}

// Event handler for button onclick to change header
myButton.onclick = function() {
    myHeading.textContent = 'Zeljanica is yummy, ' + localStorage.getItem('name');
}
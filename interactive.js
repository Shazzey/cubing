// Prompt the user for their name
var userName = prompt("What is your name?");

// Check if the user provided a name
if (userName !== null && userName !== "") {
    // Display a personalized greeting
    alert("Hello, " + userName + "! Welcome to the interactive JavaScript example.");
} else {
    // Display a generic greeting if the user didn't provide a name
    alert("Hello! Welcome to the interactive JavaScript example.");
}
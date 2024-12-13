let button = document.querySelector('.butt');
let input = document.querySelector('input[type="text"]');
let clear= document.querySelector('.clr');

let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let special = '#@$%^&*';
let lowercase = 'abcdefghijklmnopqrstuvwxyz';

// Combine the character sets
let allCharacters = uppercase + special + lowercase;

button.addEventListener("click", function() {
    let length = 10;
    let randomstring = '';
    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * allCharacters.length);
        randomstring += allCharacters[random];
    }
    input.value = randomstring; // Corrected here
});

clear.addEventListener("click", function() {
    input.value = ""; // Corrected here
});

// Add class 'navbarDark' on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function () {
    const top = window.scrollY;
    if (top >= 100) {
        header.classList.add('navbarDark');
    } else {
        header.classList.remove('navbarDark');
    }
};

// Typing Animation
const texts = ["Martine Kungu", "a Software Developer", "a 3D Animator"];
let count = 0;       // Keeps track of the text
let index = 0;       // Keeps track of the letter index
let currentText = ''; // Current text being typed
let letter = '';      // Current letters typed

function type() {
    // Reset count when reaching the end of texts array
    if (count === texts.length) {
        count = 0;
    }

    currentText = texts[count]; // Get the current text
    letter = currentText.slice(0, ++index); // Type letter by letter

    document.querySelector('.typing').textContent = letter;

    // When the current word is fully typed
    if (letter.length === currentText.length) {
        count++; // Move to the next text
        index = 0; // Reset index
        setTimeout(type, 1500); // Pause for 1.5 seconds before typing the next text
    } else {
        setTimeout(type, 100); // Continue typing the next letter
    }
}

type(); // Start the typing animation

const typewriter = document.querySelector('.typewriter');
const typewriterText = "Hi, I'm John Andre Santillan – a Passionate Computer Programmer.";
let i = 0;

function typeEffect() {
    if (i < typewriterText.length) {
        typewriter.textContent += typewriterText.charAt(i);
        i++;
        setTimeout(typeEffect, 100); // Typing speed
    } else {
        // Text stays visible after completion
    }
}

typeEffect();

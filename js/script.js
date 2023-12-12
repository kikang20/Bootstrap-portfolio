function runTypingEffect() {
  const text = "I am Ki Kang.";
  const typingElement = document.getElementById("typing-text");
  const typingDelay = 100;
  const repeatDelay = 1100;

  typeText(text, typingElement, typingDelay, repeatDelay);
}

function typeText(text, typingElement, delay, repeatDelay) {
  typingElement.textContent = ""; // Clear the text before each run
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, delay * i);
  }

  setTimeout(() => {
    typeText(text, typingElement, delay, repeatDelay);
  }, delay * text.length + repeatDelay);
}

document.addEventListener("DOMContentLoaded", runTypingEffect);

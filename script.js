const button = document.getElementById("calculateButton");
const result = document.getElementById("result");

const messages = [
  "Jouw jeugd beoordelen...",
  "Jouw huidige levensituatie beoordelen...",
  "Sociale media activiteit analyseren...",
  "Finale berekening maken...",
];

const animate = async () => {
  try {
    button.style.display = "none";
    result.style.display = "block";
    result.classList.add("blink");

    for (const message of messages) {
      result.textContent = message;
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }

    const percentage = Math.floor(Math.random() * 101);
    result.textContent = `Jij bent ${percentage}% emotioneelinstabiel!`;
    result.classList.remove("blink");

    setTimeout(() => {
      button.style.display = "block";
      button.textContent = "Opnieuw berekenen";
    }, 3000);
  } catch (error) {
    console.error("Er is iets misgegaan:", error);
    result.textContent = "Er is iets misgegaan, probeer het opnieuw.";
    button.style.display = "block";
  }
};

button.addEventListener("click", animate);

const blankSpace = document.getElementById("blank");
const buttons = document.querySelectorAll(".calc-button");
let currentInput = "";

function changeContent(value) {
  currentInput += value;
  blankSpace.innerHTML = currentInput;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id === "equals") {
      const result = eval(currentInput);
      blankSpace.innerHTML = result;
      currentInput = "";
    } else if (button.id === "del") {
      currentInput = currentInput.slice(0, -1);
      blankSpace.innerHTML = currentInput;
    } else if (button.id === "ac") {
      blankSpace.innerHTML = "";
      currentInput = "";
    } else if (button.id === "percentage") {
      if (currentInput) {
        const percentage = eval(currentInput) / 100;
        blankSpace.innerHTML = percentage;
        currentInput = "";
      } else {
        blankSpace.innerHTML = "0";
      }
    } else {
      changeContent(button.textContent);
    }
  });
});

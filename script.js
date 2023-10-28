const keyboard = document.getElementById("keyboard");
const output = document.getElementById("output");

keyboard.addEventListener("click", (event) => {
    if (event.target.classList.contains("key")) {
        const letter = event.target.textContent;
        output.value += letter;
    }
});

const saveButton = document.createElement("button");
saveButton.textContent = "Salvar Palavra";
saveButton.addEventListener("click", () => {
    alert("Palavra salva: " + output.value);
});
keyboard.appendChild(saveButton);

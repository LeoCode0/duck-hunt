let currentPoints = 0;

function createModal(text) {
  const modal = document.createElement("div");
  const container = document.createElement("div");
  const paragraph = document.createElement("p");
  const buttonClose = document.createElement("button");
  buttonClose.addEventListener("click", () => {
    modal.remove();
  });
  modal.classList.add("modal");

  paragraph.innerText = text;
  buttonClose.innerText = "x";
  container.append(paragraph, buttonClose);
  modal.appendChild(container);
  document.body.appendChild(modal);
}

function startGame(event) {
  console.log(event.stopPropagation());
  createDucks();
}

scene.addEventListener("click", shot);
bulletsParagraph.innerText = `Bullets: ${bullets}`;

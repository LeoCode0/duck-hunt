let ducksMoves = [];
let ducksDied = 0;
let velocity = 30;

function createDuck() {
  const duck = document.createElement("img");
  duck.src = "./src/images/duck_fly.png";
  duck.classList.add("duck");
  scene.appendChild(duck);
  setVerticalPosition(duck);
  console.log(duck.style.top);
  duck.addEventListener("click", died);
  duck.id = randomId();
  moveDuck(duck);
}

function setVerticalPosition(duck) {
  const max = height - duck.height * 1.5;
  const min = duck.height * 1.5;

  duck.style.top = `${Math.floor(Math.random() * (max - min + 1) + min)}px`;
}

function randomId() {
  const id = Math.random().toString(36).substr(2, 9);
  return id;
}

function moveDuck(duck) {
  let spaceLateral = 0;
  let movement = true;
  ducksMoves.push({
    interval: setInterval(() => {
      if (touch(duck)) {
        movement = !movement;
      }
      if (movement) {
        spaceLateral += 10;
      } else {
        spaceLateral -= 10;
      }
      duck.style.left = `${spaceLateral}px`;
    }, velocity),
    id: duck.id,
  });
}

function touch(duck) {
  switch (true) {
    case duck.x >= width - duck.width:
      duck.style.transform = "rotateY(180deg)";
      return true;
    case duck.x <= 0:
      duck.style.transform = "rotateY(0deg)";
      return true;
  }
}

function died(event) {
  if (bullets > 0) {
    const target = event.target;

    clearInterval(
      ducksMoves.filter((elem) => elem.id === target.id)[0].interval
    );
    ducksMoves = ducksMoves.filter((el) => {
      return el.id !== target.id;
    });
    points.innerText = currentPoints += 100;
    target.remove();

    remainingDucks[ducksDied].classList.remove("white-duck");
    remainingDucks[ducksDied].classList.add("red-duck");
    ducksDied += 1;
    bullets = 4;
    if (ducksDied === 10) {
      createModal("Ganaste");
      nextLevel();
    } else {
      setTimeout(() => {
        createDuck();
      }, 300);
    }
  }
}

function nextLevel() {
  remainingDucks.forEach((item) => {
    item.classList.remove("red-duck");
    item.classList.add("white-duck");
  });

  velocity -= 5;
  ducksDied = 0;
}

function createDucks(level = 1) {
  createDuck();

  return level;
}

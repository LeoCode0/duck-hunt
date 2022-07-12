let bullets = 3;
function shot() {
  if (bullets === 0) {
    alert("You haven't bullets");
  } else {
    bullets -= 1;
    bulletsParagraph.innerText = `Bullets: ${bullets}`;
  }
}

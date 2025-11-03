
function askName() {
  const name = prompt("What is your name?");
  document.getElementById("message").textContent = `Hello ${name}! Welcome to my page.`;
  alert(`Nice to meet you, ${name}!`);
}

function changeBox() {
  const box = document.getElementById("box");
  box.style.backgroundColor = "tomato";
  box.style.color = "white";
  box.style.borderRadius = "50px";
  box.textContent ="box"
  box.style.fontSize = "20px";
}
function resetAll() {
  document.getElementById("message").textContent = "Click the first button to start!";
  const box = document.getElementById("box");
  box.style.backgroundColor = "lightblue";
  box.style.color = "black";
  box.style.borderRadius = "10px";
  box.textContent = "Box";
  box.style.fontSize = "16px";
}
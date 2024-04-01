const myButton = document.getElementById("myButton");
const myH1 = document.getElementById("myH1");

myButton.addEventListener("click", function() {
  const newHello = document.createElement("div");
  newHello.textContent = "Hello World!";
  document.body.appendChild(newHello);
});
var button1 = document.getElementById("debunk1");
var button2 = document.getElementById("debunk2");
var fact1 = document.getElementById("fact1");
var fact2 = document.getElementById("fact2");

function showFact1() {
  fact1.style.display = "block";
  button1.style.display = "none";
}
function showFact2() {
  fact2.style.display = "block";
  button2.style.display = "none";
}
if (button1) {
  button1.addEventListener("click", showFact1);
};
if (button2) {
  button2.addEventListener("click", showFact2);
};

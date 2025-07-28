//I used a separate JS file because otherwise, the code would be looking for variables/elements that don't exist on the Involvement page (e.g. factsButton)
var involvementFacts = document.getElementById("involvement-facts");
var involvementButton = document.getElementById("involvement");

if (involvementButton) {
  involvementButton.addEventListener("click", display);
};

function display() {
  involvementFacts.style.display = "block";
  involvementFacts.innerHTML = "67% of women aged 18-49 in a 2024 KFF survey reported they would support a law “[p]rotecting doctors who perform abortions from fines or prison time”";
  involvementButton.style.display = "none";
};

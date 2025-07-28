/* .js files add interaction to your website */
//collects elements from the HTML file and adds them as a variable
var facts = document.getElementById("facts");
var factsButton = document.getElementById("facts-button");
var clickCount = 0; //used to determine how many times the button is clicked
var factsList = [
  "As of 2025, 22 states in the US either ban or have strict abortion policies.",
  "The World Health Organization recognizes abortion care as a human right for women.",
  "In 2024, about 1,141,830 abortions occurred in the US.",
  "70% of women in a 2024 KFF Women’s Health Survey support having nationwide rights to abortion.",
  "In 2023, four states (NM, IL, KS, NC) received over 10,000 inbound (out-of-state) patients."
];

//if the facts button is loaded, each time the facts button is clicked, clickCount increases by 1 and the changeText function is called
if (factsButton) {
  factsButton.addEventListener("click", changeText);
};

//each click displays a different fact based on how many clicks there have been
function changeText() {
  facts.innerHTML = factsList[clickCount];
  clickCount +=1;
  if (clickCount == factsList.length) {
    clickCount = 0; //once clickCount reaches 5, it resets to 0
  } 
}

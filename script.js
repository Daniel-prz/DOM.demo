"use strict";

const newString = document.createElement("p");
newString.innerText = "Hello DOM";
document.getElementById("container1").appendChild(newString);
const newString2 = document.createElement("p");
newString2.innerText = "Starting off!";
document.getElementById("container1").appendChild(newString2);

document.getElementById("button1").addEventListener("click", function () {
  console.log("user has clicked");
});

document.getElementById("button1").addEventListener("click", function () {
  const searchResults = document.createElement("p");
  searchResults.innerText = "Showing results...";
  document.getElementById("sr").appendChild(searchResults);
});

function displayOutput(message) {
  const newParagraph = document.createElement("p");
  newParagraph.innerText = message;
  document.getElementById("p").appendChild(newParagraph);
}

function displayOutput2(message) {
  const newParagraph = document.createElement("p");
  newParagraph.innerText = message;
  document.getElementById("r").appendChild(newParagraph);
}

const UserInputField = document.getElementById("UserInput");

document.getElementById("button1").addEventListener("click", function () {
  const UserInput = UserInputField.value;
  if (UserInput.trim() === "") {
    displayOutput("Please enter a value");
  }
});

document.getElementById("button1").addEventListener("click", function () {
  const UserInput = UserInputField.value;
  if (parseInt(UserInput) === 10) {
    displayOutput2("10!");
  } else if (parseInt(UserInput) > 10) {
    displayOutput2("Value greater than 10!");
  } else if (parseInt(UserInput) < 10) {
    displayOutput2("Value less than 10!");
  }
});

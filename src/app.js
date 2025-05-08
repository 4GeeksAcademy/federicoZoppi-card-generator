import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const generadorDeCarta = () => {
  const suits = ["♦️", "♥️", "♣️", "♠️"];
  const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

 
  const suitElements = document.getElementsByClassName("suit");
  const numberElement = document.querySelector(".number");


  for (let suit of suitElements) {
    suit.innerText = randomSuit;
  }
  numberElement.innerText = randomNumber;
};

window.onload = () => {
  generadorDeCarta(); 

  document.getElementById("generate-card").addEventListener("click", generadorDeCarta);
};
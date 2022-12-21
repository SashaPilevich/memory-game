import { score } from "./flipCard.js";
import { cardsLevelOne, cardsLevelTwo, cardsLevelThree } from "./app.js";
import { levelOne, levelTwo, levelThree, winner,createGame } from "./createGame.js";
export let isLevelOne = true;
export let isLevelTwo = false;
export let isLevelThree = false;

export function checkWinOne() {
  let cards = document.querySelectorAll(".card-wrapper");
  let one = [];
  cards.forEach((item) => {
    if (item.className === "card-wrapper flip") {
      one.push(item);
    }
    if (one.length === 16) {
      setTimeout(() => {
        levelOne.style.display = "none";
        winner.style.display = "block";
        isLevelTwo = true;
        isLevelOne = false;
      }, 1000);
      setTimeout(() => {
        while (levelOne.firstChild) {
          levelOne.removeChild(levelOne.firstChild);
        }
        createGame(cardsLevelTwo);
        isLevelTwo = true;
        isLevelOne = false;
        winner.style.display = "none"; 
      }, 5000);
    } else {
      return;
    }
  });
}
export function checkWinTwo() {
  let two = [];
  let cards = document.querySelectorAll(".card-wrapper");
  cards.forEach((item) => {
    if (item.className === "card-wrapper flip") {
      two.push(item);
    }
    if (two.length === 20) {
      setTimeout(() => {
        levelOne.style.display = "none";
        levelTwo.style.display = "none";
        winner.style.display = "block";
      }, 1000);
      setTimeout(() => {
        while (levelTwo.firstChild) {
          levelTwo.removeChild(levelTwo.firstChild);
        }
        createGame(cardsLevelThree);
        isLevelThree = true;
        isLevelTwo = false;
        isLevelOne = false;
        winner.style.display = "none";
      }, 5000);
    } else {
      return;
    }
  });
}

export function checkWinThree() {
  let three = [];
  let cards = document.querySelectorAll(".card-wrapper");
  cards.forEach((item) => {
    if (item.className === "card-wrapper flip") {
      three.push(item);
    }
    if (three.length === 28) {
      setTimeout(() => {
        levelThree.style.display = "none";
        winner.style.display = "block";
      }, 1000);
      setTimeout(() => {
        while (levelThree.firstChild) {
          levelThree.removeChild(levelThree.firstChild);
        }
        createGame(cardsLevelOne);
        levelOne.style.display = "block";
        isLevelOne = true
        isLevelTwo = false;
        isLevelThree = false
        winner.style.display = "none";
      }, 5000);
    } else {
      return;
    }
  });
}

import {
  cardsForLevelOne,
  cardsForLevelTwo,
  cardsForLevelThree,
} from "./array.js";
const root = document.getElementById("#root");
const cards = document.querySelectorAll(".card-wrapper");
let count = document.querySelector(".count");
let title = document.querySelector(".title-level");
let levelOne = document.querySelector(".level-one");
let levelTwo = document.querySelector(".level-two");
let levelThree = document.querySelector(".level-three");
let winner = document.querySelector(".winner");
let cardWrapper;
let cloneCardsLevelOne = [...cardsForLevelOne];
let cardsLevelOne = cloneCardsLevelOne.concat(cardsForLevelOne);
let cloneCardsLevelTwo = [...cardsForLevelTwo];
let cardsLevelTwo = cloneCardsLevelTwo.concat(cardsForLevelTwo);
let cloneCardsLevelThree = [...cardsForLevelThree];
let cardsLevelThree = cloneCardsLevelThree.concat(cardsForLevelThree);

createGame(cardsLevelOne);
function createGame(array) {
  array.forEach((item) => {
    cardWrapper = document.createElement("div");
    cardWrapper.className = "card-wrapper";
    cardWrapper.setAttribute("data-image", item.name);
    const back = document.createElement("img");
    back.className = "back";
    back.src = item.img;
    const front = document.createElement("img");
    front.className = "front";
    front.src = item.imgBack;
    cardWrapper.append(back, front);
    cardWrapper.addEventListener("click", flipCard);
    if (array.length === 16) {
      levelOne.append(cardWrapper);
      title.innerHTML = "Level : 1";
    } else if (array.length === 20) {
      levelTwo.append(cardWrapper);
      levelOne.style.display = "none";
      title.innerHTML = "Level : 2";
    } else if (array.length === 28) {
      levelThree.append(cardWrapper);
      levelOne.style.display = "none";
      levelTwo.style.display = "none";
      title.innerHTML = "Level : 3";
    }
    let random = Math.floor(Math.random() * 28);
    cardWrapper.style.order = random;
  });
  console.log(array.length);
}

let hasFlippedCard = false;
let firstCard;
let secondCard;
let lockBoard = false;
let score = 0;
let interval;
let isLevelOne = true;
let isLevelTwo = false;
let isLevelThree = false;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add("flip");
  if (!hasFlippedCard) {
    //first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  } else {
    //second click
    hasFlippedCard = false;
    secondCard = this;

    if (firstCard.dataset.image === secondCard.dataset.image) {
      //it is match!!!
      score += 1;
      count.innerHTML = `Count: ${score}`;
      firstCard.removeEventListener("click", flipCard);
      secondCard.removeEventListener("click", flipCard);
      resetBoard();
      if (isLevelOne) {
        checkWinOne();
      } else {
        checkWinTwo();
      }
    } else {
      score += 1;
      count.innerHTML = `Count: ${score}`;
      lockBoard = true;
      setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        lockBoard = false;
        resetBoard();
      }, 1500);
    }
  }
}

function checkWinOne() {
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
        createGame(cardsLevelTwo);
        isLevelTwo = true;
        isLevelOne = false;
        winner.style.display = "none";
        count.innerHTML = `Count: 0`;
      }, 5000);
    } else {
      return;
    }
  });
}
function checkWinTwo() {
  let two = [];
  let cards = document.querySelectorAll(".card-wrapper");
  cards.forEach((item) => {
    if (item.className === "card-wrapper flip") {
      two.push(item);
    }
    if (two.length === 36) {
      winner.style.display = "block";
      setTimeout(() => {
        levelTwo.style.display = "none";
        createGame(cardsLevelThree);
        isLevelTwo = false;
        winner.style.display = "none";
      }, 2000);
    } else {
      return;
    }
  });
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false][(firstCard, secondCard)] = [
    null,
    null,
  ];
}




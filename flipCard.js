import {count } from "./createGame.js";
import { checkWinOne, checkWinTwo, checkWinThree,isLevelOne, isLevelTwo, isLevelThree } from "./checkWin.js";


export let score = 0;
let hasFlippedCard = false;
let firstCard;
let secondCard;
let lockBoard = false;

export function flipCard(event) {
  if (lockBoard) return;
  if (event.target.closest(".card-wrapper") === firstCard) return;
  event.target.closest(".card-wrapper").classList.add("flip");
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = event.target.closest(".card-wrapper");
    return;
  } else {
    hasFlippedCard = false;
    secondCard = event.target.closest(".card-wrapper");

    if (firstCard.dataset.image === secondCard.dataset.image) {
      score += 1;
      count.innerHTML = `Count: ${score}`;
      firstCard.removeEventListener("click", flipCard);
      secondCard.removeEventListener("click", flipCard);
      resetBoard();
      if (isLevelOne) {
        checkWinOne();
      } else if(isLevelTwo) {
        checkWinTwo();
      } else if(isLevelThree){
        checkWinThree()
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

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false][(firstCard, secondCard)] = [
    null,
    null,
  ];
}
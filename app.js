import {
  cardsForLevelOne,
  cardsForLevelTwo,
  cardsForLevelThree,
} from "./array.js";
import {createGame}  from "./createGame.js";

let cloneCardsLevelOne = [...cardsForLevelOne];
export let cardsLevelOne = cloneCardsLevelOne.concat(cardsForLevelOne);
let cloneCardsLevelTwo = [...cardsForLevelTwo];
export let cardsLevelTwo = cloneCardsLevelTwo.concat(cardsForLevelTwo);
let cloneCardsLevelThree = [...cardsForLevelThree];
export let cardsLevelThree = cloneCardsLevelThree.concat(cardsForLevelThree);
const greeting = document.querySelector('.greeting')
export const app = () => {
setTimeout(() =>createGame(cardsLevelOne), 5000 )
setTimeout(() =>greeting.style.display='none',4000)
}








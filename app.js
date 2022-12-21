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

export const app = () => {
  createGame(cardsLevelOne);
}









import { flipCard } from "./flipCard.js";
export let levelOne = document.querySelector(".level-one");
export let levelTwo = document.querySelector(".level-two");
export let levelThree = document.querySelector(".level-three");
export let title = document.querySelector(".title-level");
export let count = document.querySelector(".count");

export let winner = document.querySelector(".winner");

export function createGame(array){
  array.forEach((item) => {
    let cardWrapper = document.createElement("div");
    cardWrapper.className = "card-wrapper";
    cardWrapper.setAttribute("data-image", item.name);
    const back = document.createElement("img");
    back.className = "back";
    back.src = item.img;
    const front = document.createElement("div");
    front.className = "front";
    cardWrapper.append(front,back);
    cardWrapper.addEventListener("click", flipCard);
    if (array.length === 16) {
      levelOne.append(cardWrapper);
      title.innerHTML = "Level : 1";
    } else if (array.length === 20) {
      levelTwo.append(cardWrapper);
      levelOne.style.display = "none";
      title.innerHTML = "Level : 2";
      count.innerHTML = `Count: 0`;
    } else if (array.length === 28) {
      levelThree.append(cardWrapper);
      levelOne.style.display = "none";
      levelTwo.style.display = "none";
      title.innerHTML = "Level : 3";
      count.innerHTML = `Count: 0`;
    }
    let random = Math.floor(Math.random() * 28);
    cardWrapper.style.order = random;
  });
}

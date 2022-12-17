const root = document.getElementById("#root");
const cards = document.querySelectorAll(".card-wrapper");

let hasFlippedCard = false;
let firstCard;
let secondCard;
let lockBoard = false;
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
      firstCard.removeEventListener("click", flipCard);
      secondCard.removeEventListener("click", flipCard);
      resetBoard();
    } else {
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

(function randomPosition() {
  cards.forEach((item) => {
    let random = Math.floor(Math.random() * 28);
    item.style.order = random;
  });
})();
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false][(firstCard, secondCard)] = [
    null,
    null,
  ];
}
cards.forEach((item) => {
  item.addEventListener("click", flipCard);
});
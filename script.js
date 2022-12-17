const root = document.getElementById("#root");
const cards = document.querySelectorAll(".card-wrapper");
let count = document.querySelector('.count')
let title = document.querySelector('.title-level')
let levelOne = document.querySelector('.level-one')
let levelTwo = document.querySelector('.level-two')
let levelThree = document.querySelector('.level-three')
let winner = document.querySelector('.winner')

let hasFlippedCard = false;
let firstCard;
let secondCard;
let lockBoard = false;
let score = 0;

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
      if(isLevelOne){
        checkWinOne()
      } else {
        checkWinTwo()
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

function checkWinOne () {
  
  let one = []
  cards.forEach((item)=>{
    if(item.className === 'card-wrapper flip'){
      one.push(item)
    } 
    if(one.length === 16){
      levelOne.style.display = 'none'
      winner.style.display = 'block'
      setTimeout(() => {
        levelTwo.style.display = 'grid'
        isLevelTwo = true
        isLevelOne = false
        
      }, 2000);
    }else {
      return
    }
  })
  console.log(one.length)
}
function checkWinTwo () {
  let two = []
  cards.forEach((item)=>{
    if(item.className === 'card-wrapper flip'){
      two.push(item)
    } 
    if(two.length === 36){
      levelTwo.style.display = 'none'
      winner.style.display = 'block'
      setTimeout(() => {
        levelThree.style.display = 'grid'
        isLevelTwo = false
      }, 2000);
    }
    
  })
  console.log(two.length)
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
const cards = document.querySelectorAll('.memory-card');

let hasDLippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let score = 0;

function flipCard() {
  if(lockBoard) return;
  if(this === firstCard) return;

  this.classList.toggle('flip');

  if(!hasDLippedCard){
    //first click
    hasDLippedCard = true;
    firstCard = this;

    return;
  }
    hasDLippedCard = false;
    secondCard = this;

    //do cards match?
    checkForMatch();
}

function checkForMatch() {
  let isMatch =  firstCard.dataset.framework === secondCard.dataset.framework;
   
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  score++;
  console.log('Score incremented:', score);

  document.querySelector('.score').textContent = `Score: ${score}`;

  checkWinWithScore();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1000);
}

function resetBoard(){
  hasDLippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
}

(function shuffle() {
  cards.forEach(card =>{
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

function checkWinWithScore() {
  if (score === 8) {
    setTimeout(() => {
      alert("You won!");
    }, 500); // Delay to allow the last flip animation
  }
}


cards.forEach(card => card.addEventListener('click', flipCard));



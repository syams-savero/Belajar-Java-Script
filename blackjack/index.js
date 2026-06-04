let firstCard = 10
let secondCard = 11
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el")
console.log(messageEl)

let sumEl = document.getElementById("sum-el")
console.log(sumEl)

let cardsEl = document.getElementById("cards-el")

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards :" + cards[0] + " " + cards[1];
  sumEl.textContent = "Sum : " + sum;
  if (sum <= 20) {
      message = "Do you want to draw a new card?";
  } else if (sum === 21) {
      message = "Wohoo! You've got Blackjack!";
      hasBlackJack = true
  } else {
      message = "You're out of the game!";
      isAlive = false;
  }

messageEl.textContent = message;
}

function newCards() {
  
  let card = 6;
  sum += card;
  cards.push(card);
  renderGame()
}

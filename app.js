var userWins = 0;
var computerWins = 0;
var ties = 0;

/* DOM elements */
const userWins_dom = document.getElementById("userWins");
const computerWins_dom = document.getElementById("computerWins");
const ties_dom = document.getElementById("ties");
const notification_dom = document.getElementById("notification");
const rock_dom = document.getElementById("rock");
const paper_dom = document.getElementById("paper");
const scissors_dom = document.getElementById("scissors");

/* Get computer hand */
function getComputerHand() {
  let num = Math.floor(Math.random() * 3); // 0, 1, or 2
  let hand = "";
  switch (num) {
    case 0:
      hand = "Rock";
      break;
    case 1:
      hand = "Paper";
      break;
    case 2:
      hand = "Scissors";
      break;
  }
  return hand;
}

function win(userHand, computerHand) {
  userWins++;
  userWins_dom.innerHTML = userWins;
  notification_dom.innerHTML = `${userHand} beats ${computerHand}. You've won!`;
}

function lose(userHand, computerHand) {
  computerWins++;
  computerWins_dom.innerHTML = computerWins;
  notification_dom.innerHTML = `${userHand} loses to ${computerHand}. You've lost.`;
}

function tie(userHand, computerHand) {
  ties++;
  ties_dom.innerHTML = ties;
  notification_dom.innerHTML = `${computerHand} equals ${userHand}. It's a draw.`;
}

/* Play game */
function play(userHand) {
  let computerHand = getComputerHand();
  switch (userHand + computerHand) {
    /* Win scenarios */
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      console.log(userHand + ":" + computerHand + " - You win");
      win(userHand, computerHand);
      break;
    /* Lose scenarios */
    case "RockPaper":
    case "PaperScissors":
    case "ScissorsRock":
      console.log(userHand + ":" + computerHand + " - You lose");
      lose(userHand, computerHand);
      break;
    /* Tie scenarios */
    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
      console.log(userHand + ":" + computerHand + " - Tie");
      tie(userHand, computerHand);
      break;
  }
}

function main() {
  rock_dom.addEventListener("click", function() {
    play("Rock");
  });

  paper_dom.addEventListener("click", function() {
    play("Paper");
  });

  scissors_dom.addEventListener("click", function() {
    play("Scissors");
  });
}

main();
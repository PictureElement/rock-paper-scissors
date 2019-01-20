const userWins = 0;
const computerWins = 0;

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
      hand = "rock";
      break;
    case 1:
      hand = "paper";
      break;
    case 2:
      hand = "scissors";
      break;
  }
  return hand;
}

/* Play game */
function play(userHand) {
  let computerHand = getComputerHand();
  switch (userHand + computerHand) {
    /* Win scenarios */
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      console.log(userHand + ":" + computerHand + " - You win");
      break;
    /* Lose scenarios */
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      console.log(userHand + ":" + computerHand + " - You lose");
      break;
    /* Tie scenarios */
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      console.log(userHand + ":" + computerHand + " - Tie");
      break;
  }
}

function main() {
  rock_dom.addEventListener("click", function() {
    play("rock");
  });

  paper_dom.addEventListener("click", function() {
    play("paper");
  });

  scissors_dom.addEventListener("click", function() {
    play("scissors");
  });
}

main();
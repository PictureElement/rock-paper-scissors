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
const userHand_dom = document.getElementById("userHand");
const computerHand_dom = document.getElementById("computerHand");

function disableButtonClicks() {
  rock_dom.style.pointerEvents = "none";
  paper_dom.style.pointerEvents = "none";
  scissors_dom.style.pointerEvents = "none";
}

function enableButtonClicks() {
  rock_dom.style.pointerEvents = "auto";
  paper_dom.style.pointerEvents = "auto";
  scissors_dom.style.pointerEvents = "auto";
}

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

function updateHand(hand, hand_dom) {
  // Clear hand
  for (let i = 0; i < hand_dom.children.length; i++) {
    hand_dom.children[i].style.display = "none";
  }

  // Update hand
  switch (hand) {
    case "Rock":
      hand_dom.children[0].style.display = "block";
      break;
    case "Paper":
      hand_dom.children[1].style.display = "block";
      break;
    case "Scissors":
      hand_dom.children[2].style.display = "block";
      break;
  }
}

function resetState() {
  // Clear hands
  for (let i = 0; i < userHand_dom.children.length; i++) {
    userHand_dom.children[i].style.display = "none";
    computerHand_dom.children[i].style.display = "none";
  }
  // Show question marks
  userHand_dom.children[3].style.display = "block";
  computerHand_dom.children[3].style.display = "block";
  // Reset user border color
  userHand_dom.classList.remove("green-border", "red-border", "yellow-border");
  // Reset notification area
  notification_dom.innerHTML = "Make your move";
  // Enable button clicks
  enableButtonClicks();
}

function win(userHand, computerHand) {
  // Update score
  userWins++;
  userWins_dom.innerHTML = userWins;

  // Update user hand
  updateHand(userHand, userHand_dom);

  // Update computer hand
  updateHand(computerHand, computerHand_dom);

  // Update border color
  userHand_dom.classList.remove("green-border", "red-border", "yellow-border")
  userHand_dom.classList.add("green-border");
  
  // Notify
  notification_dom.innerHTML = `${userHand} beats ${computerHand}. You've won!`;

  // Reset state
  setTimeout(() => resetState(), 3000);
}

function lose(userHand, computerHand) {
  // Update score
  computerWins++;
  computerWins_dom.innerHTML = computerWins;

  // Update user hand
  updateHand(userHand, userHand_dom);

  // Update computer hand
  updateHand(computerHand, computerHand_dom);
  
  // Update border color
  userHand_dom.classList.remove("green-border", "red-border", "yellow-border")
  userHand_dom.classList.add("red-border");

  // Notify
  notification_dom.innerHTML = `${userHand} loses to ${computerHand}. You've lost.`;

  // Reset state
  setTimeout(() => resetState(), 3000);
}

function tie(userHand, computerHand) {
  // Update score
  ties++;
  ties_dom.innerHTML = ties;

  // Update user hand
  updateHand(userHand, userHand_dom);

  // Update computer hand
  updateHand(computerHand, computerHand_dom);

  // Update border color
  userHand_dom.classList.remove("green-border", "red-border", "yellow-border")
  userHand_dom.classList.add("yellow-border");

  // Notify
  notification_dom.innerHTML = `${computerHand} equals ${userHand}. It's a draw.`;

  // Reset state
  setTimeout(() => resetState(), 3000);
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
    disableButtonClicks();
    play("Rock");
  });

  paper_dom.addEventListener("click", function() {
    disableButtonClicks();
    play("Paper");
  });

  scissors_dom.addEventListener("click", function() {
    disableButtonClicks();
    play("Scissors");
  });
}

main();
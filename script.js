const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const CHOICES = [ROCK, PAPER, SCISSORS];

const WINNING_SCORE = 5;
let score = [0, 0]; // [player score, computer score]

const playerButtons = document.querySelectorAll("#player-buttons button");
playerButtons.forEach((btn) => btn.addEventListener("click", playerSelectionEvent));

const playAgainBtn = document.getElementById("play-again");
playAgainBtn.addEventListener("click", resetGame);

function playerSelectionEvent() {
  const playerChoice = this.dataset.choice;
  const winnerIndex = playRound(playerChoice, getComputerChoice());
  score[winnerIndex]++;

  if (score[0] === WINNING_SCORE) {
    gameOver("YOU WIN!");
  } else if (score[1] === WINNING_SCORE) {
    gameOver("YOU LOSE");
  }
}

function getComputerChoice() {
  const index = Math.floor(Math.random() * 3); // 0, 1, or 2
  return CHOICES[index];
}

function setGameMessage(message) {
  const resultDiv = document.getElementById("game-result");
  resultDiv.textContent = message;
}

function gameOver(message) {
  setGameMessage(message);
  playerButtons.forEach((btn) => btn.disabled = true);
  playAgainBtn.style.display = "";
}

function resetGame() {
  score = [0, 0];
  setGameMessage();
  playAgainBtn.style.display = "none";
  playerButtons.forEach((btn) => btn.disabled = false);
}

/*
Display round result. Return an index representing the winner.
*/
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    setGameMessage(`Draw! You both chose ${playerSelection}.`);
    return -1;
  }

  const outcome = [playerSelection, computerSelection];
  const playerWinScenarios = [
    [ROCK, SCISSORS],
    [PAPER, ROCK],
    [SCISSORS, PAPER]
  ];

  if (playerWinScenarios.find((scenario) => scenario.toString() === outcome.toString())) {
    setGameMessage(`You win! ${playerSelection} beats ${computerSelection}`);
    return 0;
  } else {
    setGameMessage(`You lose! ${computerSelection} beats ${playerSelection}`);
    return 1;
  }
}

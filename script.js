const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const CHOICES = [ROCK, PAPER, SCISSORS];

const WINNING_SCORE = 5;
const score = { player: 0, computer: 0 };

const playerScoreElem = document.getElementById("player");
const computerScoreElem = document.getElementById("computer");
setScoreDisplay();

const playerButtons = document.querySelectorAll("#player-buttons button");
playerButtons.forEach((btn) => btn.addEventListener("click", playerSelectionEvent));

const playAgainBtn = document.getElementById("play-again");
playAgainBtn.addEventListener("click", resetGame);

function playerSelectionEvent() {
  const playerChoice = this.dataset.choice;
  const winner = playRound(playerChoice, getComputerChoice());
  score[winner]++;
  setScoreDisplay();

  if (score.player === WINNING_SCORE) {
    gameOver("YOU WIN!");
  } else if (score.computer === WINNING_SCORE) {
    gameOver("YOU LOSE");
  }
}

function getComputerChoice() {
  const index = Math.floor(Math.random() * 3); // 0, 1, or 2
  return CHOICES[index];
}

function setScoreDisplay() {
  playerScoreElem.textContent = score.player;
  computerScoreElem.textContent = score.computer;
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
  score.player = 0;
  score.computer = 0;

  setScoreDisplay();
  setGameMessage();

  playAgainBtn.style.display = "none";
  playerButtons.forEach((btn) => btn.disabled = false);
}

/*
Display round result, return winner
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
    return 'player';
  } else {
    setGameMessage(`You lose! ${computerSelection} beats ${playerSelection}`);
    return 'computer';
  }
}

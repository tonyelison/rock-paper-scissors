const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const CHOICES = [ROCK, PAPER, SCISSORS];

function getComputerChoice() {
  let index = Math.floor(Math.random() * 3); // 0, 1, or 2
  return CHOICES[index];
}

function showRoundResult(message) {
  const resultDiv = document.getElementById("game-result");
  resultDiv.textContent = message;
}

// log round result and return an index representing the winner
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    showRoundResult(`Draw! You both chose ${playerSelection}.`);
    return -1;
  }

  const outcome = [playerSelection, computerSelection];
  const playerWinScenarios = [
    [ROCK, SCISSORS],
    [PAPER, ROCK],
    [SCISSORS, PAPER]
  ];

  if (playerWinScenarios.find((scenario) => scenario.toString() === outcome.toString())) {
    showRoundResult(`You win! ${playerSelection} beats ${computerSelection}`);
    return 0;
  } else {
    showRoundResult(`You lose! ${computerSelection} beats ${playerSelection}`);
    return 1;
  }
}

function buttonEvent() {
  const playerChoice = this.dataset.choice;
  playRound(playerChoice, getComputerChoice());
}

const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => btn.addEventListener("click", buttonEvent));


/*
5 round game disabled for now...
*/

// function logFinalResults(score) {
//   console.log('\nFINAL SCORE');
//   logScore(score);
  
//   if (score[0] > score[1]) {
//     console.log('You Win!');
//   } else if (score[0] < score[1]) {
//     console.log('You Lose!');
//   } else {
//     console.log('Wow, I guess nobody wins lol');
//   }
// }

// function logScore(score) {
//   console.log(`You: ${score[0]}, Computer: ${score[1]}`);
// }

// function game() {
//   const totalRounds = 5;
//   let score = [0, 0]; // player, computer

//   for (let round = 0; round < totalRounds; round++) {
//     console.log(`\nROUND ${round + 1}`);
    
//     let winnerIndex = playRound(getPlayerChoice(), getComputerChoice());
//     score[winnerIndex]++;

//     // end game if there's a winner
//     // don't log 'Current Score' on last iteration
//     if (score[0] > 2 || score[1] > 2 || round === totalRounds - 1) {
//       break;
//     }

//     console.log('Current Score:');
//     logScore(score);
//   }

//   logFinalResults(score);
// }

// game();

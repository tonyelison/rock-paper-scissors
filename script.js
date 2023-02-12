const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const CHOICES = [ROCK, PAPER, SCISSORS];

function getComputerChoice() {
  let index = Math.floor(Math.random() * 3); // 0, 1, or 2
  return CHOICES[index];
}

function getPlayerChoice() {  
  let choice = prompt("Rock, Paper, or Scissors?"); 
  const parsedChoice = () => choice?.toLowerCase(); 
 
  while (!CHOICES.includes(parsedChoice())) {
    let promptMessage;
    
    if (choice === '') {
      promptMessage = 'You can\'t play unless you give me something! Rock, Paper, or Scissors?'
    } else if (choice) {
      promptMessage = `Whaddya mean, "${choice}"? Don't you know how to play this game? Rock, Paper, or Scissors?!`;
    } else {
      promptMessage = 'Don\'t you want to play???';
    }

    choice = prompt(promptMessage);
  }

  return parsedChoice();
}

// log round result and return an index representing the winner
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log(`Draw! You both chose ${playerSelection}.`);
    return -1;
  }

  const outcome = [playerSelection, computerSelection];
  const playerWinScenarios = [
    [ROCK, SCISSORS],
    [PAPER, ROCK],
    [SCISSORS, PAPER]
  ];

  if (playerWinScenarios.find((scenario) => scenario.toString() === outcome.toString())) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    return 0;
  } else {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    return 1;
  }
}

function logScore(score) {
  console.log(`You: ${score[0]}, Computer: ${score[1]}`);
}

function logFinalResults(score) {
  console.log('\nFINAL SCORE');
  logScore(score);
  
  if (score[0] > score[1]) {
    console.log('You Win!');
  } else if (score[0] < score[1]) {
    console.log('You Lose!');
  } else {
    console.log('Wow, I guess nobody wins lol');
  }
}

function game() {
  const totalRounds = 5;
  let score = [0, 0]; // player, computer

  for (let round = 0; round < totalRounds; round++) {
    console.log(`\nROUND ${round + 1}`);
    
    let winnerIndex = playRound(getPlayerChoice(), getComputerChoice());
    score[winnerIndex]++;

    // end game if there's a winner
    // don't log 'Current Score' on last iteration
    if (score[0] > 2 || score[1] > 2 || round === totalRounds - 1) {
      break;
    }

    console.log('Current Score:');
    logScore(score);
  }

  logFinalResults(score);
}

game();

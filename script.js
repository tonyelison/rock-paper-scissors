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
  const parseChoice = () => choice.toLowerCase();
  
  while (!CHOICES.includes(parseChoice())) {
    choice = prompt(`Whaddya mean, "${parseChoice()}"? Don't you know how to play this game? Rock, Paper, or Scissors?!`);
  }

  return parseChoice();
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `Tie! Both players chose ${playerSelection}.`;
  }

  const outcome = [playerSelection, computerSelection];
  const playerWinScenarios = [
    [ROCK, SCISSORS],
    [PAPER, ROCK],
    [SCISSORS, PAPER]
  ];

  if (playerWinScenarios.find((scenario) => {
    return scenario[0] === outcome[0] && scenario[1] === outcome[1];
  })) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

const playerChoice = getPlayerChoice();
const computerChoice = getComputerChoice();
console.log(playRound(playerChoice, computerChoice));

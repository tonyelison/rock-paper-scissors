const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  let index = Math.floor(Math.random() * 3); // 0, 1, or 2
  return choices[index];
}

function getPlayerChoice() {
  let choice = prompt("Rock, Paper, or Scissors?");
  const parseChoice = () => choice.toLowerCase();
  
  while (!choices.includes(parseChoice())) {
    choice = prompt(`Whaddya mean, "${parseChoice()}"? Don't you know how to play this game? Rock, Paper, or Scissors?!`);
  }

  return parseChoice();

}

function playRound(playerSelection, computerSelection) {
  console.log(playerSelection);
  console.log(computerSelection);
}

playRound(getPlayerChoice(), getComputerChoice());

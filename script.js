const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
  let index = Math.floor(Math.random() * 3); // 0, 1, or 2
  return choices[index];
}


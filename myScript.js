//a function that randomly selects a string
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}
//it works
console.log(computerPlay())
//establisth variables - force playerSelection to lower case to desensitize it. ".toLowerCase()"
const playerSelection = 'rock'
playerSelection.toLowerCase()
const computerSelection = computerPlay() 
//create a function to compare playerSelection to computerSelection
function playRound(playerSelection, computerSelection) {
    let log = '';
  
    if (playerSelection === 'rock') {
      if (computerSelection === 'paper') {
        log = 'You Lose! Paper beats Rock';
      } else if (computerSelection === 'scissors') {
        log = 'You Win! Rock beats Scissors';
      } else {
        log = "It's a tie";
      }
    } else if (playerSelection === 'paper') {
      if (computerSelection === 'scissors') {
        log = 'You Lose! Scissors beats Paper';
      } else if (computerSelection === 'rock') {
        log = 'You Win! Paper beats Rock';
      } else {
        log = "It's a tie";
      }
    } else if (playerSelection === 'scissors') {
      if (computerSelection === 'rock') {
        log = 'You Lose! Rock beats Scissors';
      } else if (computerSelection === 'paper') {
        log = 'You Win! Scissors beats Paper';
      } else {
        log = "It's a tie";
      }
    }
  
    return log;
  }
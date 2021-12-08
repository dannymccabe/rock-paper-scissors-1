//a function that randomly selects a string
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

//establisth variables 
let playerSelection = "rock";
//working, I think I was calling the same function twice. When I logged I got two different values. 
let computerSelection = computerPlay();
console.log(computerSelection);

//create a function to compare playerSelection to computerSelection
function playRound(playerSelection, computerSelection) {
// your code here! - if statements not working properly - force playerSelection to lower case to desensitize it. ".toLowerCase()" 
        computerSelection = computerPlay().toLowerCase();
        playerSelection = playerSelection.toLowerCase();
        
        if (computerSelection == playerSelection) {
            return ("Tie game!");
        }else if(playerSelection==="rock" && computerSelection === "paper"){
            return ("You lose. Paper beats rock.")
        }else if(playerSelection==="rock" && computerSelection === "scissors"){
            return result ("You win. Rock beats scissors.")
        }else if(playerSelection==="scissors" && computerSelection === "rock"){
            return result ("You lose. Rock beats scissors.")
        }else if(playerSelection==="scissors" && computerSelection === "paper"){
            return result ("You win. Scissors beats paper.")
        }else if(playerSelection==="paper" && computerSelection === "rock"){
            return result ("You win. Paper beats rock.")
        }else if(playerSelection==="paper" && computerSelection === "scissors"){
            return result ("You lose. Scissors beats paper.")
        }
}
  //calling the function
  console.log(playRound());
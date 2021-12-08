const move=["rock", "paper", "scissors"]

function computerPlay() {
    return move[Math.floor(Math.random() * move.length)]
}

function playerPlay() {
    return move[Math.floor(Math.random() * move.length)]
}

function playRound() {
    const playerSelection = playerPlay()
    const computerSelection = computerPlay()

    if (playerSelection == computerSelection)
        return "You tied"
    else if(playerSelection === "rock" && computerSelection === "paper")
        return "Sorry, you lost. Paper beats rock!"
    else if (playerSelection === "rock" && computerSelection === "scissors")
        return "You won! Rock beats scissors!"
    else if (playerSelection === "paper" && computerSelection === "scissors")
        return "Sorry, you lost! Scissors beats paper!"
    else if (playerSelection === "paper" && computerSelection === "rock")
        return "You won! Paper beats rock!"
    else if (playerSelection === "scissors" && computerSelection === "rock")
        return "Sorry, you lost! Rock beats scissors!"
    else if (playerSelection === "scissors" && computerSelection === "paper")
        return "You won! Scissors beats paper!"
}

function game() {
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
}
console.log(game())
//completed the game by copying a youtube tutorial and finishing the if..else() statements. I was following the same logic but this one worked and mine didn't.
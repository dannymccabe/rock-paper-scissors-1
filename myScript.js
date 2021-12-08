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

    if (playerSelection === "rock" && computerSelection === "paper")
        return "Sorry, you lost. Paper beats rock!"
    else if (playerSelection === "rock" && computerSelection === "rock")
        return "You tied"
    else if (playerSelection === "rock" && computerSelection === "scissors")
        return "You won! Rock beats scissors!"
    
}

function game() {
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
}
console.log(game())
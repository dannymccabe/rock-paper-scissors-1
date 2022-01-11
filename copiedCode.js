//using DOM to create elements using javascript
const userChoiceDisplay = document.createElement("h1")
const computerChoiceDisplay = document.createElement("h1")
const resultDisplay = document.createElement("h1")
const gameGrid = document.getElementById("game")
//appending elements into gameGrid <div>
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)

//keep score
let userScore = 0;
let computerScore = 0;
let mainScore = document.createElement('h3');

//making an array of the possible choices to loop through 
const choices = ['rock', 'paper', 'scissors']
let userChoice
let computerChoice

// writing a function that runs on a click event
const handleClick = (e) => {
    userChoice = e.target.id
    //display your choice
    userChoiceDisplay.innerHTML = 'User choice: ' + userChoice
    generateComputerChoice()
    getResults()
}

//randomly generate a computer choice using Math.random wrapped in Math.floor
const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoice = randomChoice
    //display the computer choice 
    computerChoiceDisplay.innerHTML = 'Computer choice: ' + computerChoice
}
// creating a loop to go through choices array
for (let i =0; i < choices.length; i++){
    const button = document.createElement('button')
    button.id = choices[i]
    button.innerHTML = choices[i]
    //creating the event listener for the click and calling function handleClick
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button)
}

if (playerScore < 5 && computerScore < 5) {
    // a function to compare the user choice to the computer random choice using switch statements
    const getResults = () => {
        switch (userChoice + computerChoice) {
            //choices are added together and return a string so comparisons should have no spaces
            case 'scissorspaper':
            case 'rockscissors':
            case 'paperrock':
                resultDisplay.innerHTML = "You Win!"
                userScore ++
            break
            case 'paperscissors':
            case 'scissorsrock':
            case 'rockpaper':
                resultDisplay.innerHTML = "You Lose!"
                computerScore ++
            break
            case 'paperpaper':
            case 'scissorsscissors':
            case 'rockrock':
                resultDisplay.innerHTML = "It's A Draw!"
            break
        }
    }
}
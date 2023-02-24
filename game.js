const choices = ["rock", "paper", "scissors"];

// Function to randomly choose one of the three choices for the computer player.
function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

// Function to take player input for choice. Convert input text to lower case remove case sensitivity.
function getPlayerChoice() {
    let playerChoice = prompt("Choose rock, paper, or scissors.");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        console.log("Tie");
        return 0;
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        console.log("You win a point.");
        return 1;
    } else if (playerChoice == "rock" && computerChoice == "paper") {
        console.log("Computer wins a point.");
        return 2;
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        console.log("You win a point.");
        return 1;
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        console.log("Computer wins a point.");
        return 2;
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        console.log("You win a point.");
        return 1;
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        console.log("Computer wins a point.");
        return 2;
    } else {
        console.log("Something went wrong. Try again.");
        return 0
    }
}

function game() {
    let playerChoice = "rock";
    let computerChoice = "rock";
    let playerScore = 0;
    let computerScore = 0;
    let winner = 0;

    for (let i = 0; i < 5; i++) {
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();
        winner = playRound(playerChoice, computerChoice);
        if (winner == 1) {
            playerScore += 1;
        } else if (winner == 2) {
            computerScore += 1;
        } else {
            continue;
        }
        console.log("The score is: You: " + playerScore + " Computer: " + computerScore);
    }

    if (playerScore > computerScore) {
        console.log("You win!");
    } else if (playerScore < computerScore) {
        console.log("Computer wins!");
    } else {
        console.log("The game is a tie.");
    }
}

game();
var playerSelection = "";
var computerSelection = "";
var result = "";
var countOfGames = 0;
var userScore = 0;
var computerScore = 0;
var visibilityReset = "";
var systemON = false;


function computerPlay() {
    let arrayOfAnswer = ["rock", "scissors", "paper"];
    return arrayOfAnswer[Math.floor(Math.random() * arrayOfAnswer.length)];
}
function reset() {
    countOfGames = 0;
    userScore = 0;
    computerScore = 0;
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById ("scissors").disabled = false;
    document.getElementById('computer_score').value = "0";
    document.getElementById('user_score').value = "0";
    document.getElementById('your_turn').value = "";
    document.getElementById('computer_turn').value = "";

}

function start(param) {
    if (countOfGames == 4) {
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;
        document.getElementById('Reset').style.visibility = "visible";

    }
    countOfGames++;
    console.log("Round: " + countOfGames);
    playerSelection = param;
    computerSelection = computerPlay();
    console.log("Player selection: " + playerSelection)
    console.log("Computer selection: " + computerSelection);
    document.getElementById('your_turn').value = playerSelection;
    document.getElementById('computer_turn').value = computerSelection;
    playRound(playerSelection, computerSelection)
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "scissors" && computerSelection == "scissors") {
        result = "tie";
        console.log("Result: " + result);

    }

    if (playerSelection == "scissors" && computerSelection == "paper") {
        result = "playerWon";
        console.log("Result: " + result);

    }

    if (playerSelection == "scissors" && computerSelection == "rock") {
        result = "playerLoose";
        console.log("Result: " + result);

    }

    if (playerSelection == "paper" && computerSelection == "paper") {
        result = "tie";
        console.log("Result: " + result);
    }

    if (playerSelection == "paper" && computerSelection == "rock") {
        result = "playerWon";
        console.log("Result: " + result);
    }

    if (playerSelection == "paper" && computerSelection == "scissors") {
        result = "playerLoose";
        console.log("Result: " + result);
    }

    if (playerSelection == "rock" && computerSelection == "rock") {
        result = "tie";
        console.log("Result: " + result);
    }

    if (playerSelection == "rock" && computerSelection == "scissors") {
        result = "playerWon";
        console.log("Result: " + result);
    }

    if (playerSelection == "rock" && computerSelection == "paper") {
        result = "playerLoose";
        console.log("Result: " + result);
    }


    if (result == "playerWon") {
        userScore++;
        document.getElementById('computer_score').value = userScore;
    }

    if (result == "playerLoose") {
        computerScore++;
        document.getElementById('user_score').value = computerScore;
    }

}

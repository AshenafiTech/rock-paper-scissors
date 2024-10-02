
function getComputerChoice() {
    choices = ["rock", "paper", "scissors"];
    randomIndex = Math.floor(Math.random() * choices.length);
    
    return choices[randomIndex];
};

function getHumanChoice() {
    user_input = window.prompt("Your choice: ");
    return user_input;
};

function playGame() {
    let humanScore = 0; 
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        humanChoice = humanChoice.toLowerCase();
        
        if (humanChoice === computerChoice) {
            return "It's a tie!";
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            return "You win!";
        } else {
            return "Computer win!";
        }
    }

    
    let i = 0;
    while (i < 5) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        let result = playRound(humanSelection, computerSelection);
        
        if (result === "You win!") {
            humanScore += 1;
        } else if (result === "Computer win!") {
                computerScore += 1;
        }

        i+=1;

    }

    if (humanScore === computerScore) {
        return "It's a tie!";
    } else if (humanScore > computerScore) {
        return "Congrats, You win!";
    } else {
        return "Sorry, Computer Wins!";
    }

}


res = playGame();
console.log(res);
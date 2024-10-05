
function getComputerChoice() {
    choices = ["rock", "paper", "scissors"];
    randomIndex = Math.floor(Math.random() * choices.length);
    
    return choices[randomIndex];
};

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    
    humanChoice = humanChoice.trim().toLowerCase();

    if (humanScore === 5 || computerScore === 5) {
        alert("Game Over");
        if (humanScore > computerScore) {
            alert("Congratulations! You Won!");
        } else if (humanScore < computerScore) {
            alert("Sorry, You lose!");
        } else {
            alert("It's a tie!");
        }

        location.reload();
    }
    
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } 
    
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        const you = document.querySelector('#you');
        let content = Number(you.querySelector('span').textContent);
        content++;
        humanScore++;
        you.querySelector('span').textContent = content;
        
        return "You win! +1 point";
    } else {
        const computer = document.querySelector('#computer');
        let content = Number(computer.querySelector('span').textContent);
        content++;
        computerScore++;
        computer.querySelector('span').textContent = content;
        return "Computer win! +1 point";
    }

}

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    const rockChoice = rock.textContent;
    const computerChoice = getComputerChoice();
    alert(`You: ${rockChoice}, computer: ${computerChoice}
        ${playRound(rockChoice, computerChoice)}`);
})


const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    const paperChoice = paper.textContent;
    const computerChoice = getComputerChoice();
    alert(`You: ${paperChoice}, Computer: ${computerChoice}
        ${playRound(paperChoice, computerChoice)}`);
})


const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    const scissorChoice = scissors.textContent;
    const computerChoice = getComputerChoice();
    alert(`You: ${scissorChoice}, Computer: ${computerChoice}
        ${playRound(scissorChoice, computerChoice)}`);
})



















// function getHumanChoice() {
//     // user_input = window.prompt("Your choice: ");

//     return user_input;
// };




// function playGame() {
//     let humanScore = 0; 
//     let computerScore = 0;

//     function playRound(humanChoice, computerChoice) {

//         humanChoice = humanChoice.toLowerCase();
        
//         if (humanChoice === computerChoice) {
//             return "It's a tie!";
//         } else if (
//             (humanChoice === "rock" && computerChoice === "scissors") ||
//             (humanChoice === "scissors" && computerChoice === "paper") ||
//             (humanChoice === "paper" && computerChoice === "rock")
//         ) {
//             return "You win! +1 point";
//         } else {
//             return "Computer win! +1 point";
//         }
//     }

    
//     let i = 0;
//     while (i < 5) {

//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
        
//         let result = playRound(humanSelection, computerSelection);
        
//         if (result === "You win!") {
//             humanScore += 1;
//         } else if (result === "Computer win!") {
//                 computerScore += 1;
//         }

//         i+=1;

//     }

//     if (humanScore === computerScore) {
//         return "It's a tie!";
//     } else if (humanScore > computerScore) {
//         return "Congrats, You win!";
//     } else {
//         return "Sorry, Computer Wins!";
//     }

// }








// res = playGame();
// console.log(res);
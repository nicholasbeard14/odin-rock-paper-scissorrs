const computerPlay = () => {
    const choices = ["Rock", "Paper", "Scissors"];

    const index = Math.floor(Math.random()*choices.length);
    const computerChoice = choices[index];

    return computerChoice
}

const playRound = (playerChoice, computerChoice) => {
    let playerSelection = playerChoice.charAt(0).toUpperCase() + playerChoice.toLowerCase().slice(1);
    
    switch (playerSelection) {
        case 'Rock':
            if (computerChoice == 'Rock') {
                console.log("This round is a tie! " + playerSelection + " ties with " + computerChoice);
                return "Tie"
            } else if (computerChoice == 'Paper') {
                console.log(`You lose this round! ${computerChoice} beats ${playerSelection}`);
                return "ComputerW"
            } else {
                console.log(`You win this round! ${playerSelection} beats ${computerChoice}`);
                return "UserW"
            }
        case 'Paper':
            if (computerChoice == 'Rock') {
                console.log(`You win this round! ${playerSelection} beats ${computerChoice}`);
                return "UserW"
            } else if (computerChoice == 'Paper') {
                console.log("This round is a tie! " + playerSelection + " ties with " + computerChoice);
                return "Tie"
            } else {
                console.log(`You lose this round! ${computerChoice} beats ${playerSelection}`);
                return "ComputerW"
            }
        case 'Scissors':
            if (computerChoice == 'Rock') {
                console.log(`You lose this round! ${computerChoice} beats ${playerSelection}`);
                return "ComputerW"
            } else if (computerChoice == 'Paper') {
                console.log(`You win this round! ${playerSelection} beats ${computerChoice}`);
                return "UserW"
            } else {
                console.log("This round is a tie! " + playerSelection + " ties with " + computerChoice);
                return "Tie"
            }
        default:
            return "Try again. You must enter either rock, paper, or scissors."
    }
}

const game = () => {
    let userScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const userChoice = prompt("Enter Rock, Paper, or Scissors ", "");
        const computerChoice = computerPlay();

        const result = playRound(userChoice, computerChoice);

        switch (result) {
            case 'UserW':
                userScore++;
                console.log()
                break;
            case 'ComputerW':
                computerScore++;
                break;
            case 'Tie':
                break;
        }
    }

    if (userScore > computerScore) {
        console.log("You win the series!");
    } else if (computerScore > userScore) {
        console.log("You lose the series this time. Try again!");
    } else {
        console.log("It's a draw!");
    }
}

game();

// This was the function used for just a single game. Needed to update return vals
// const playRound = (playerChoice, computerChoice) => {
//     let playerSelection = playerChoice.charAt(0).toUpperCase() + playerChoice.toLowerCase().slice(1);
    
//     switch (playerSelection) {
//         case 'Rock':
//             if (computerChoice == 'Rock') {
//                 return "It's a tie! " + playerSelection + " ties with " + computerChoice
//             } else if (computerChoice == 'Paper') {
//                 return `You lose! ${computerChoice} beats ${playerSelection}`
//             } else {
//                 return `You win! ${playerSelection} beats ${computerChoice}`
//             }
//         case 'Paper':
//             if (computerChoice == 'Rock') {
//                 return `You win! ${playerSelection} beats ${computerChoice}`
//             } else if (computerChoice == 'Paper') {
//                 return "It's a tie! " + playerSelection + " ties with " + computerChoice
//             } else {
//                 return `You lose! ${computerChoice} beats ${playerSelection}`
//             }
//         case 'Scissors':
//             if (computerChoice == 'Rock') {
//                 return `You lose! ${computerChoice} beats ${playerSelection}`
//             } else if (computerChoice == 'Paper') {
//                 return `You win! ${playerSelection} beats ${computerChoice}`
//             } else {
//                 return "It's a tie! " + playerSelection + " ties with " + computerChoice
//             }
//         default:
//             return "Try again. You must enter either rock, paper, or scissors."
//     }
// }
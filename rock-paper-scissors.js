const computerPlay = () => {
    const choices = ["Rock", "Paper", "Scissors"];

    const index = Math.floor(Math.random()*choices.length);
    const computerChoice = choices[index];

    return computerChoice
}

const reportRoundTied = (selection) => {
    const roundResult = document.querySelector('#current-game-result');

    roundResult.textContent = "This round is a tie! " + selection + " ties with " + selection;
}

const reportRoundWonByUser = (playerSelection, computerSelection) => {
    const roundResult = document.querySelector('#current-game-result');
    const userScore = document.querySelector('#user-score');

    roundResult.textContent = `You win this round! ${playerSelection} beats ${computerSelection}`;
    userScore.textContent = (parseInt(userScore.textContent) + 1).toString();
}

const reportRoundWonByComputer = (playerSelection, computerSelection) => {
    const roundResult = document.querySelector('#current-game-result');
    const computerScore = document.querySelector('#computer-score');

    roundResult.textContent = `You lose this round! ${computerSelection} beats ${playerSelection}`;
    computerScore.textContent = (parseInt(computerScore.textContent) + 1).toString();
}

const checkWinner = () => {
    const userScore = parseInt(document.querySelector('#user-score').textContent);
    const computerScore = parseInt(document.querySelector('#computer-score').textContent);

    const finalResult = document.querySelector('#final-result');

    if (userScore == 5) {
        finalResult.textContent = "You win the series! Refresh the page to play again!"
        buttons.forEach(button => button.removeEventListener('click', playRound));
    } else if (computerScore == 5) {
        finalResult.textContent = "You lost this time. Refresh to try again!"
        buttons.forEach(button => button.removeEventListener('click', playRound));
    } else {
        return
    }
}

const playRound = (event) => {
    const computerChoice = computerPlay();
    console.log(computerChoice);

    const playerChoice = event.target.id;
    console.log(playerChoice);
    
    switch (playerChoice) {
        case 'Rock':
            if (computerChoice == 'Rock') {
                reportRoundTied(playerChoice);
            } else if (computerChoice == 'Paper') {
                reportRoundWonByComputer(playerChoice, computerChoice);
            } else {
                reportRoundWonByUser(playerChoice, computerChoice);
            }
            break;
        case 'Paper':
            if (computerChoice == 'Rock') {
                reportRoundWonByUser(playerChoice, computerChoice);
            } else if (computerChoice == 'Paper') {
                reportRoundTied(playerChoice);
            } else {
                reportRoundWonByComputer(playerChoice, computerChoice);
            }
            break;
        case 'Scissors':
            if (computerChoice == 'Rock') {
                reportRoundWonByComputer(playerChoice, computerChoice);
            } else if (computerChoice == 'Paper') {
                reportRoundWonByUser(playerChoice, computerChoice);
            } else {
                reportRoundTied(playerChoice);
            }
            break;
        default:
            return "Try again. You must enter either rock, paper, or scissors."
    }

    checkWinner();
}

const buttons = document.querySelectorAll('button');

console.log(buttons);

buttons.forEach(button => button.addEventListener('click', playRound));
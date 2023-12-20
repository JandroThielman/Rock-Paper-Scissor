const computerChoice = document.getElementById('computer-choice');
const playerChoice = document.getElementById('player-choice');
const resultOutput = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let computer = '';
let player = '';
let result = '';

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber == 1) {
        computer = 'Rock';
    } else if (randomNumber == 2) {
        computer = 'Paper';
    } else if (randomNumber == 3) {
        computer = 'Scissor';
    }
    computerChoice.innerHTML = computer;
}

function getResult() {
    if (computer === player) {
        result = 'Gelijkspel';
    }
    else if (computer == "Rock" && player == "Paper") {
        result = 'je hebt gewonnen!';
    }
    else if (computer == "Rock" && player == "Scissor") {
        result = 'je hebt verloren!';
    }
    else if (computer == "Paper" && player == "Scissor") {
        result = 'je hebt gewonnen!';
    }
    else if (computer == "Paper" && player == "Rock") {
        result = 'je hebt verloren!';
    }
    else if (computer == "Scissor" && player == "Rock") {
        result = 'je hebt gewonnen!';
    }
    else if (computer == "Scissor" && player == "Paper") {
        result = 'je hebt verloren!';
    }
    resultOutput.innerHTML = result;
}

possibleChoices.forEach(button => button.addEventListener('click', (e) => {
    player = e.target.id;
    playerChoice.innerHTML = player;
    generateComputerChoice();
    getResult();
}));
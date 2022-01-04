const ComputerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resltDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) +1;
    console.log(randomNumber);

if (randomNumber === 1){
    computerChoice = 'rock'
}
if   ( randomNumber === 2){
    computerChoice = "scissor"

} 
if (randomNumber ===3){
    computerChoice = "paper"
}
ComputerChoiceDisplay.innerHTML = computerChoice
}


function getResult(){
    if(computerChoice === userChoice){
        result = "It's Draw!!!"
    }
    if (computerChoice === 'rock' && userChoice === "paper"){
        result ="you win!!"
    }

    if (computerChoice === 'rock' && userChoice === "scissor"){
        result ="you lost!!"
    }

    if (computerChoice === 'paper' && userChoice === "scissor"){
        result ="you win!!"
    }
    if (computerChoice === 'paper' && userChoice === "rock"){
        result ="you lose!!"
    }
    if (computerChoice === 'scissor' && userChoice === "rock"){
        result ="you win!!"
    }
    if (computerChoice === 'scissor' && userChoice === "paper"){
        result ="you loose!!"
    }
    resltDisplay.innerHTML = result
}















// const ROCK = "ROCK";
// const PAPER = "PAPER";
// const SCIESSOR = "SCIESSOR";

// let userInput = prompt("Enter your choice Rock, Paper, Sciessor").toUpperCase();


// if (userInput != ROCK && userInput != PAPER && userInput !=  SCIESSOR){
//     console.log("This is not a valid choice");
//     userInput= PAPER, alert(`"You Choice is wrong so we set the choice is PAPER by default"`);

// }
// console.log('User:', userInput);

// function getComputerInput(){


//     rand =Math.random();
//     compInput = rand;

//     if (rand <  0.33){
//         compInput = ROCK;
//     }
//     else if (0.33 <  rand < 0.66){
//         compInput = PAPER;
//     }
//     else {
//         compInput = SCIESSOR;
//     }
//     return compInput;

// }
// const computerInput = getComputerInput();

// // game Logic
// if (userInput === computerInput){
//     alert(`"It's DRAW!!! User Selected: ${userInput}", Computer Selected: ${computerInput}`
//  );
// }
// else if(userInput === ROCK && computerInput === SCIESSOR || (userInput === PAPER && computerInput === ROCK) ||  userInput === SCIESSOR && computerInput === PAPER){
//     alert(`User WON!! User Selected: ${userInput}", Computer Selected: ${computerInput}`);
// }

// else {
//     alert(`Computer  WON!! User Selected: ${userInput}", Computer Selected: ${computerInput}`);
// }
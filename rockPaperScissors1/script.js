const image = document.querySelectorAll('.img');

const userScorePara = document.querySelector("#userId");
const computerScorePara = document.querySelector("#computerId");

const msg = document.querySelector("#msg");

let userScore = 0;
let computerScore = 0;


image.forEach((img) => {
    img.addEventListener('click', () => {
        const userChoice = img.dataset.choice;
        
        const choicess = ['rock', 'paper', 'scissors'];
        const computerChoice = choicess[Math.floor(Math.random() * 3)];


        if(userChoice === computerChoice) {
            console.log("It's a tie!");
            msg.textContent = `It's a tie! You both chose ${userChoice}`;
        } else if ( userChoice === 'rock' && computerChoice === 'scissors' ||
                    userChoice === 'paper' && computerChoice === 'rock' ||
                    userChoice === 'scissors' && computerChoice === 'paper') {
            console.log("You win!");
            userScore++;
            userScorePara.textContent = userScore;
            msg.textContent = `it's a win for you! ${userChoice} beats ${computerChoice}`;
        } else {
            computerScore++;
            computerScorePara.textContent = computerScore;
            msg.textContent = `Computer wins! ${computerChoice} beats ${userChoice}`;

            console.log("Computer wins!");
        }

    });
});


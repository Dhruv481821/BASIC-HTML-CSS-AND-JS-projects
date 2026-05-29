let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".CHOICE");
const msg = document.querySelector("#msg");

const userScorePare = document.querySelector("#user_score");
const computerScorePare = document.querySelector("#computer_score");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const compChoice = Math.floor(Math.random() * 3);
    return options[compChoice];
}

const drawGame = () => {
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "rgb(3, 17, 80)";
}

const userWinner = (userWin) => {
    if(userWin) {
        userScore++;
        userScorePare.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePare.innerText = computerScore;
        msg.innerText = `You Lose! ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const computerChoice = genCompChoice();
    console.log("computer choice = ", computerChoice);

    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = computerChoice === "scissors" ? false : true;
        } else {
            userWin = computerChoice === "rock" ? false : true;
        }

        userWinner(userWin, userChoice, computerChoice);
    }
}


choices.forEach((CHOICE) => {
    CHOICE.addEventListener("click", () => {
    const userChoice = CHOICE.getAttribute("id");

        playGame(userChoice);
    });
});
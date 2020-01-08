let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ["r","p","s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
    
}

function convertToWord(letter){
    switch(letter){
        case 'r':
            return "Rock";
        case 'p':
            return "Paper";
        case 's':
            return "Scissors";
    }
}

function wins(user, computer){
   userScore++;
   userScore_span.innerHTML = userScore;
   computerScore_span.innerHTML = computerScore;
   result_p.innerHTML = 
   `User's ${convertToWord(user).fontsize(4).sub()} beats computer's 
   ${convertToWord(computer).fontsize(4).sub()} . You Win!`;
}
function loses(user, computer){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = 
    `Computer's ${convertToWord(computer).fontsize(4).sub()} beats user's 
    ${convertToWord(user).fontsize(4).sub()} . You Lose!`;
}
function draws(user, computer){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = 
    `Both give ${convertToWord(user)} It's Draw!!`;
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            wins(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            loses(userChoice, computerChoice);
            break;
        case "pp":
        case "rr":
        case "ss":
            draws(userChoice, computerChoice);
            break;
        
    }

}


function main(){
    rock_div.addEventListener(
        'click', function() {
            game("r");
        }
    )
    paper_div.addEventListener(
        'click', function() {
            game("p");
        }
    )
    scissors_div.addEventListener(
        'click', function() {
            game("s");
        }
    )
}

main();
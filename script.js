let playerScore = 0;
let computerScore = 0;

for(let i = 0; i<5; i++){
    let userChoice = prompt("Choose either rock paper or scissors: ").toLowerCase();
    let rand = Math.floor(Math.random() * 3);
    let computerChoice = "rock";
    getComputerChoice();
    
    function getComputerChoice(){
        //console.log(rand);
        if(rand ==0){
            computerChoice = "rock";
        }
        else if(rand ==1){
            computerChoice = "paper";
        }
        else{
            computerChoice = "scissors";
        }
        return computerChoice;
    }
    
    function playRound(userChoice,computerChoice){
        if(userChoice == "rock" && computerChoice == "paper"){
            computerScore++;
            return "You Lose!";
        }
        else if(userChoice == "rock" && computerChoice == "scissors"){
            playerScore++;
            return "You Win!";
        }
        else if(userChoice == "paper" && computerChoice == "rock"){
            playerScore++;
            return "You Win!";
        }
        else if(userChoice == "paper" && computerChoice == "scissors"){
            computerScore++;
            return "You Lose!";
        }
        else if(userChoice == "scissors" && computerChoice == "rock"){
            computerScore++;
            return "You Lose!";
        }
        else if(userChoice == "scissors" && computerChoice == "paper"){
            playerScore++;
            return "You Win!";
        }
        else{
            return "Draw!";
        }
    }
    //console.log(userChoice,computerChoice);
    console.log(playRound(userChoice,computerChoice));
    if(playerScore >= 3){
        console.log("You beat the computer best 3 out of 5!");
    }    
    else if(computerScore >= 3 ){
        console.log("You lost to the computer best 3 out of 5!");
    }
}


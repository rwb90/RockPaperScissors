let playerScore = 0;
let computerScore = 0;

    let userChoice = 'rock';
    let computerChoice = "rock";
    let buttons = document.querySelectorAll('button');
    let youIMG = document.querySelector('.youIMG');
    let computerIMG = document.querySelector('.computerIMG');
    let computerScoreDisplay = document.querySelector('.computerScore');
    let userScoreDisplay = document.querySelector('.userScore');
    let finalResults = document.querySelector('.finalResults');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if(button.className == 'rock'){
                userChoice = 'rock';
                
            }
            else if(button.className == 'paper'){
                userChoice = 'paper';
            }
            else if(button.className == 'scissors'){
                userChoice = 'scissors';
            }
            playRound(userChoice,getComputerChoice());
        }); 
    });
    
    function getComputerChoice(){
        let rand = Math.floor(Math.random() * 3);
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
        }
        else if(userChoice == "rock" && computerChoice == "scissors"){
            playerScore++;
        }
        else if(userChoice == "paper" && computerChoice == "rock"){
            playerScore++;
        }
        else if(userChoice == "paper" && computerChoice == "scissors"){
            computerScore++;
        }
        else if(userChoice == "scissors" && computerChoice == "rock"){
            computerScore++;
        }
        else if(userChoice == "scissors" && computerChoice == "paper"){
            playerScore++;
        }
        displayResult(userChoice, computerChoice);
        updateScore();
    }

function updateScore(){
    userScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    if(playerScore >= 5){
        finalResults.textContent = "YOU WIN!";
    }
    else if(computerScore >= 5){
        finalResults.textContent = "YOU LOSE!";
    }
}
    
function displayResult(userChoice,computerChoice){
    youIMG.src = "./pictures/"+userChoice+".png";
    youIMG.setAttribute('style', 'width: 200px; height: 200px;' );
    computerIMG.src = "./pictures/"+computerChoice+".png";
    computerIMG.setAttribute('style', 'width: 200px; height: 200px;' );
    

}   



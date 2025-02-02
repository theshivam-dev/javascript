const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const paragraph = document.getElementById("paragraph");

function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1; 
}
function playRound(userChoice) {
  const computerGuess = getComputerChoice();
  
  const choices = { 1: "Rock", 2: "Paper", 3: "Scissor" };
  paragraph.innerHTML = choices[computerGuess];

  if (userChoice === computerGuess) {
    alert("Tie");
  } else if (
    (userChoice === 1 && computerGuess === 3) || 
    (userChoice === 2 && computerGuess === 1) || 
    (userChoice === 3 && computerGuess === 2)    
  ) {
    alert("You win!");
  } else {
    alert("You lose!");
  }
}
rock.addEventListener("click", () => playRound(1));
paper.addEventListener("click", () => playRound(2));
scissor.addEventListener("click", () => playRound(3));

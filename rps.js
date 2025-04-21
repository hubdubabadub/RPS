const gamesCounter = document.querySelector("#gamesCounter");
const scoreCounter = document.querySelector("#scoreCounter");
const playerField = document.querySelector("#playerField");
const cpuField = document.querySelector("#cpuField");
const messageField = document.querySelector("#messageField");
messageField.textContent = 'Click to start';
playerField.textContent, cpuField.textContent = '';

let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");
let resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", reset);

let humanScore = 0,
  cpuScore = 0,
  started = false,
  winThreshold = 0,
  matchLimit = 0;

function getComputerChoice() {
  let x = Math.random()
  if (x <= 0.33) {
    return 1;
  } else if (0.33 < x && x <= 0.66) {
    return 2;
  } else if (x > 0.66) {
    return 3;
  }  
}
function translate(x) {
  switch(x) {
    case 1:
      return 'Rock';
    case 2:
      return 'Paper';
    case 3:
      return 'Scissors';
  }
}

function playRound(human) {
  messageField.textContent = '';
  const cpu = getComputerChoice();
  let result = human-cpu;
  playerField.textContent = `${(translate(human))}`;
  cpuField.textContent = `${(translate(cpu))}`;
  switch(result) {
    case 1:
    case -2:
      messageField.textContent = 'Player wins!';
      humanScore++;
      break;
    case -1:
    case 2:
      messageField.textContent = 'CPU wins!';
      cpuScore++;
      break;
    case 0:
      messageField.textContent = 'Draw!';
      break;
  }
  updateScore();
  checkScore();
}

function checkScore() {
  if (humanScore === winThreshold) {
    messageField.textContent = 'Humanity wins!';
    gameOver();
  }
  else if (cpuScore === winThreshold) {
    messageField.textContent = 'Destroyed all humans!';
    gameOver();
  }
}

function updateScore() {
  scoreCounter.textContent = `Score:\nHuman: ${humanScore}\nCPU: ${cpuScore}`;
}

function reset() {
  humanScore = 0;
  cpuScore = 0; 
  updateScore();
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
  started = true;
  resetButton.textContent = "Reset";
  messageField.textContent = "";
  
  matchLimit = Number(prompt("How many games?", ''));
  gamesCounter.textContent = `Games: ${matchLimit}`;
  winThreshold = Math.floor(matchLimit/2) + 1;
}

function gameOver () {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
  gamesCounter.textContent = messageField.textContent;
  started = false;
  resetButton.textContent = "Play again"
}

rockButton.addEventListener("click", () => playRound(1));
paperButton.addEventListener("click", () => playRound(2));
scissorsButton.addEventListener("click", () => playRound(3));


//this line is considered an ideal length before a line break, at 80 characters


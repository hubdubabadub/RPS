const gamesCounter = document.querySelector("#gamesCounter");
const scoreCounter = document.querySelector("#scoreCounter");
const playerField = document.querySelector("#playerField");
const cpuField = document.querySelector("#cpuField");
const messageField = document.querySelector("#messageField");
messageField.textContent = '';
playerField.textContent = '';
cpuField.textContent = '';
const rockButton = document.querySelector("#rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
// getElementById is outdated

let humanScore = 0;
let cpuScore = 0;


// const element = document.getElementById("myBtn");
// element.addEventListener("click", function() {
//   document.getElementById("demo").innerHTML = "Hello World";


function getComputerChoice() {
  let x = Math.random()
  //console.log(`${x}`)
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

function game(human) {
  const cpu = getComputerChoice();

  let result = human-cpu;
  //console.log(`Player: ${(translate(human))}, CPU: ${(translate(cpu))}`);
  playerField.textContent = `${(translate(human))}`;
  cpuField.textContent = `${(translate(cpu))}`;
  switch(result) {
    case 1:
    case -2:
      //console.log('Player wins!');
      messageField.textContent = 'Player wins!';
      humanScore++;
      break;
    case -1:
    case 2:
      //console.log("CPU wins!");
      messageField.textContent = 'CPU wins!';
      cpuScore++;
      break;
    case 0:
      //console.log('Draw!')
      messageField.textContent = 'Draw!';
      break;
  }
//      messageField.textContent = '';
}

function main() {
  const matchLimit = Number(prompt('How many games?', ''));
  //console.log(`Playing ${matchLimit} games`);
  gamesCounter.textContent = `Games: ${matchLimit}`
  const winThreshold = Math.floor(matchLimit/2) + 1;


  let keepGoing = true;
  while (keepGoing) {
    rockButton.addEventListener("click", game(1));
    paperButton.addEventListener("click", game(2));
    scissorsButton.addEventListener("click", game(3));
    //console.log(`Score:\nHuman: ${humanScore}\nCPU: ${cpuScore}\n`);
    scoreCounter.textContent = `Score:\nHuman: ${humanScore}\nCPU: ${cpuScore}\n`;
    if (humanScore == winThreshold || cpuScore == winThreshold) {
      keepGoing = false;
    }
  }

  if (humanScore > cpuScore) {
    //console.log('Humanity wins!');
    messageField.textContent = 'Humanity wins!';
  }
  else {
    //console.log('Destroyed all humans!');
    messageField.textContent = 'Destroyed all humans!';
  }
}

main();
//this line is considered an ideal length before a line break, at 80 characters


function getComputerChoice() {
  let x = Math.random()
  console.log(`${x}`)

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

function game() {
  let player = Number(prompt('1: Rock, 2: Paper, 3: Scissors', ''))
  let cpu = getComputerChoice();

  let result = player-cpu
  console.log(`Player: ${(translate(player))}, CPU: ${(translate(cpu))}`)
  
  // if (result == 1 || result == -2) {
  //   console.log('Player wins!');
  // }
  // else if (result == -1 || result == 2) {
  //   console.log("CPU wins!");
  // }
  // else {
  //   console.log('Draw!')
  // }
  switch(result) {
    case 1:
    case -2:
      console.log('Player wins!');
      break;
    case -1:
    case 2:
      console.log("CPU wins!");
      break;
    case 0:
      console.log('Draw!')
      break;
  }

}

game();

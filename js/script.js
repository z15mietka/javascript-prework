
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerMove == '2'){
    playerMove = 'papier';
} else if(playerMove == '3'){
    playerMove = 'nozyce';

  }




let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}else if(playerMove == '2'){
    playerMove = 'papier';
} else if(playerMove == '3'){
    playerMove = 'nozyce';

  }

printMessage('Twój ruch to: ' + playerMove);
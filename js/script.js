let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}

printMessage('Twój ruch to: ' + computerMove);

else if(computerMove == '2'){
    computerMove = 'papier';
  }
  
  printMessage('Twój ruch to: ' + playerMove);

} else if playerMove == '3'){
    computerMove = 'nozyce';
  }
  
  printMessage('Twój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}

printMessage('Twój ruch to: ' + playerMove);
else if(computerMove == '2'){
    computerMove = 'papier';
  }
  
  printMessage('Twój ruch to: ' + playerMove);

} else if playerMove == '3'){
    computerMove = 'nozyce';
  }
  
  printMessage('Twój ruch to: ' + computerMove);

  if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }
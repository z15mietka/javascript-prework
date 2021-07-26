
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
let computerMove = 'nieznany ruch';

if(computerInput == '1'){
    computerMove = 'kamień';
  } else if(computerMove == '2'){
      computerMove = 'papier';
  } else if(computerMove == '3'){
      computerMove = 'nozyce';
  }


if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else if ( computerMove == 'papier' && playerMove == 'kamien'){
    printMessage('Ty wygrywasz!');
  } else if ( computerMove == 'nozyce' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }

if( playerMove == 'kamień' && computerMove == 'papier'){
    printMessage('Ty przegrywasz!');
  } else if ( playerMove == 'papier' && computerMove == 'kamien'){
    printMessage('Ty przegrywasz!');
  } else if ( playerMove == 'nozyce' && computerMove == 'papier'){
    printMessage('Ty przegrywasz!');
  }

if( computerMove == 'kamień' && playerMove == 'kamien'){
    printMessage('Remis!');
  } else if ( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis!');
  } else if ( computerMove == 'nozyce' && playerMove == 'nozyce'){
    printMessage('Remis!');
  }
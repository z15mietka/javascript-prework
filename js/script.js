function getMoveName(playerInput) {
	if(playerInput == '1'){
	playerMove = 'kamień';
  } else if(playerInput== '2'){
	playerMove = 'papier';
  } else if(playerInput == '3'){
	playerMove = 'nozyce';
  }
  return playerMove
  }


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput== '2'){
  playerMove = 'papier';
} else if(playerInput == '3'){
  playerMove = 'nozyce';
}*/


console.log('Ruch gracza: ' + playerMove);


let computerInput = Math.floor (Math.random() *3) + 1;

console.log('Komputer wylosowal: ' + computerInput);

let computerMove = getMoveName(computerInput);
/*
if(computerInput == '1'){
    computerMove = 'kamień';
  } else if(computerInput == '2'){
      computerMove = 'papier';
  } else if(computerInput == '3'){
      computerMove = 'nozyce';
  }*/


if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else if ( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  } else if ( computerMove == 'nozyce' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }

if( playerMove == 'kamień' && computerMove == 'papier'){
    printMessage('Ty przegrywasz!');
  } else if ( playerMove == 'papier' && computerMove == 'kamień'){
    printMessage('Ty przegrywasz!');
  } else if ( playerMove == 'nozyce' && computerMove == 'papier'){
    printMessage('Ty przegrywasz!');
  }

if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');
  } else if ( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis!');
  } else if ( computerMove == 'nozyce' && playerMove == 'nozyce'){
    printMessage('Remis!');
  }
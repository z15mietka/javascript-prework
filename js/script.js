function getMoveName(Input) {
  let move = 'nieznany ruch'
  
	if(Input == '1'){
	  move = 'kamień';
  } else if(Input== '2'){
    move = 'papier';
  } else if(Input == '3'){
    move = 'nozyce';
  }
  return move
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


if( computerMove == 'kamień' && playemoveMove == 'papier'){
    printMessage('Wygrywasz!');
  } else if ( computerMove == 'kamień' && playerMove == 'nozyce'){
    printMessage('Przegrywasz!');
  } else if ( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');
  } else if (ComputerMove =='papier' && PlayerMove == 'kamień'){
    printMessage('Przegrywasz :(');
    computerScore = computerScore + 1;
  } else if (ComputerMove =='papier' && PlayerMove == 'nozyce'){
    printMessage('Wygrywasz!');
    playerScore = playerScore + 1;
  } else if (ComputerMove =='papier' && PlayerMove == 'papier'){
    printMessage('Remis');
  } else if (ComputerMove =='nozyce' && PlayerMove == 'papier'){
    printMessage('Przegrywasz :(');
    computerScore = computerScore + 1;
  } else if (ComputerMove =='nozyce' && PlayerMove == 'kamień'){
    printMessage('Wygrywasz!');
    playerScore = playerScore + 1;
  } else if (ComputerMove=='nozyce' && PlayerMove == 'nozyce'){
    printMessage('Remis');
  } else {
    printMessage('Wybierz numer pomiędzy 1 a 3')
  }
}
displayResult(ComputerMove, PlayerMove);
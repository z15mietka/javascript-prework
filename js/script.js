function getMoveName(Input) {
  let move = 'nieznany ruch'
  console.log('Player move: ' + PlayerMove)
  
	if(Input == '1'){
	  move = 'kamień';
  } else if(Input== '2'){
    move = 'papier';
  } else if(Input == '3'){
    move = 'nozyce';
  } else {
    printMessage('Nieznany ruch ' + MoveId + '.');
    return 'Nieznany ruch';
  }
}


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

function getMoveName(ComputerInput) {
  let computerMove = getMoveName(computerInput);

  if(computerInput == '1'){
  computerMove = 'kamień';
} else if(computerInput == '2'){
    computerMove = 'papier';
} else if(computerInput == '3'){
    computerMove = 'nozyce';
} else {
  printMessage('Nieznany ruch ' + MoveId + '.');
  return 'Nieznany ruch';
}
}

console.log('Ruch gracza: ' + playerMove);


let computerInput = Math.floor (Math.random() *3) + 1;
console.log('Komputer wylosowal: ' + computerInput);



const displayResult = function(ComputerMove, PlayerMove){
    printMessage('Computer\'s move: ' + ComputerMove);
    printMessage('Your move: ' + PlayerMove);
    console.log('Function displayResult with arguments: ' + ComputerMove +', '+ PlayerMove + ' was called')
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
 // printResult ("RESULT:")
  printResult ('You '+ playerScore + ' - ' + computerScore + ' Computer');

}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});
}
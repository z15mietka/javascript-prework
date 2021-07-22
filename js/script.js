function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }
  
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

if(randomNumber == 1){
  computerMove = 'kamień';
}

/*let computerMove = `kamień`;

printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

printMessage('Twój ruch to: ' + playerMove);
else if(computerMove == '2'){
    computerMove = 'papier';
  }

printMessage('Twój ruch to: ' + playerMove);

} else if computerMove == '3'){
    computerMove = 'nozyce';
  }*/

printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

printMessage('Twój ruch to: ' + computerMove);
  else if(playerMove == '2'){
      playerMove = 'papier';
    }
  
printMessage('Twój ruch to: ' + computerMove);
  
  } else if playerMove == '3'){
    playerMove = 'nozyce';
    }



printMessage('Mój ruch to: ' + computerMove);

else if(computerMove == '2'){
    computerMove = 'papier';
  }
  
printMessage('Twój ruch to: ' + playerMove);

} else if playerMove == '3'){
    computerMove = 'nozyce';
  }

printMessage('Twój ruch to: ' + computerMove);

} else if(computerMove == '1'){
    computerMove = 'kamien';
  }








  let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(randomNumber);;

/*if(playerInput == '1'){
  playerMove = 'kamień';
}

printMessage('Twój ruch to: ' + playerMove);

else if(computerMove == '2'){
    computerMove = 'papier';
  }

printMessage('Twój ruch to: ' + playerMove);

} else if computerMove == '3'){
    computerMove = 'nozyce';
}*/

printMessage('Twój ruch to: ' + computerMove);
  else if(playerMove == '2'){
      playerMove = 'papier';
    }
  
printMessage('Twój ruch to: ' + computerMove);
  
  } else if playerMove == '3'){
    playerMove = 'nozyce';
    }




    if( computerMove == 'kamień' && playerMove == 'papier'){
        printMessage('Ty wygrywasz!');
      }
    if( computerMove == 'nozyce' && playerMove == 'papier'){
        printMessage('Ty wygrywasz!');
      }
    if( computerMove == 'papier' && playerMove == 'papier'){
        printMessage('Remis!');
      }
    if( computerMove == 'kamien' && playerMove == 'kamien'){
        printMessage('Remis!');
      }
    if( computerMove == 'nozyce' && playerMove == 'nozyce'){
        printMessage('Remis!');
      }
    

    if( playerMove == 'kamień' && computerMove == 'papier'){
        printMessage('Ty wygrywasz!');
      }
    if( playerMove == 'nozyce' && computerMove == 'papier'){
        printMessage('Ty wygrywasz!');
      }
    if( playerMove == 'papier' && computerMove == 'papier'){
        printMessage('Remis!');
      }
    if( playerMove == 'kamien' && computerMovee == 'kamien'){
        printMessage('Remis!');
      }
    if( playerMove == 'nozyce' && computerMove == 'nozyce'){
        printMessage('Remis!');
      }
    
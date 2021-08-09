{
  function playGame(playerInput) {
      console.log('Gracz wybrał: ' + playerInput);
          
      clearMessages();

      const getMoveName = function(argMoveId) {
          if (argMoveId == 1) {
              return 'kamień';
          } else if (argMoveId == 2) {
              return 'papier';
          } else if (argMoveId == 3) {
              return 'nożyce';
          } else {
              printMessage('Nie znam ruchu o id ' + argMoveId +'.');
              return 'nieznany ruch';
          }
      }

      const displayResult = function(argComputerMove, argPlayerMove) {
          console.log('Wyświetlono argComputerMove i argPlayerMove: '+ argComputerMove +', '+ argPlayerMove);
          printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove + '.');
          if (argComputerMove == argPlayerMove ) {
              printMessage('Remis!');
              return 'remis';
          } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
              printMessage('Punkt dla mnie!');
              return 'przegrana';
          } else if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
              printMessage('Punkt dla Ciebie!');
              return 'wygrana';
          } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
              printMessage('Punkt dla Ciebie!');
              return 'wygrana';
          } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
              printMessage('Punkt dla mnie!');
              return 'przegrana';
          } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
              printMessage('Punkt dla Ciebie!');
              return 'wygrana';
          } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
              printMessage('Punkt dla mnie!');
              return 'przegrana';
          } else {
              printMessage('Nieznany ruch- Wpisz 1, 2 lub 3');
              return 'błąd';
          }
          
      }
      
      // Computer
      const randomNumber = Math.floor(Math.random()*3+1);
      console.log('Wylosowana liczba to '+ randomNumber);

      const argComputerMove = getMoveName(randomNumber);
      const argPlayerMove = getMoveName(playerInput);
      
      console.log('wynik gry: ' + displayResult(argComputerMove, argPlayerMove));
  }

  document.getElementById('play-rock').addEventListener('click', function(){playGame(1)});
  document.getElementById('play-paper').addEventListener('click', function(){playGame(2)});
  document.getElementById('play-scissors').addEventListener('click', function(){playGame(3)});
}
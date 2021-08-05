function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

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

  function displayResult
  	console.log('moves:', argComputerMove, argPlayerMove);
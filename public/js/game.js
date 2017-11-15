

//document.getElementById("blinkText").onclick = function() {
 //  window.location.href = "/mainmenu";
//}

window.onload = function(){
}

gameScreen(0);

var screenNumber = 0;
var gameContainer = document.getElementById("gameContainer");

gameContainer.addEventListener('click', function(e){
	if(screenNumber == 0){
		if(e.target.id == "banker"){
			screenNumber++;
			gameScreen(screenNumber);
			saveProfession("Banker");
		}
		else if(e.target.id == "carpenter"){
			screenNumber++;
			gameScreen(screenNumber);
			saveProfession("Carpenter");
		}
		else if(e.target.id == "farmer"){
			screenNumber++;
			gameScreen(screenNumber);
			saveProfession("Farmer");
		}
		else if(e.target.id == "differences"){
			window.alert("You've Discovered the Differences!");
		}
	}
	if(screenNumber == 1){
		if(e.target.id == "submitBut"){
			screenNumber++;
			gameScreen(screenNumber);
			savePlayerNames([0]);
			savePlayerNames([1]);
			savePlayerNames([2]);
			savePlayerNames([3]);
			savePlayerNames([4]);
		}

	}
	if(screenNumber == 2){
		if(e.target.id == "marchChoice"){
			screenNumber++
			gameScreen(screenNumber);
			saveStartMonth("March");
		}
		else if(e.target.id == "aprilChoice"){
			screenNumber++;
			gameScreen(screenNumber);
			saveStartMonth("April");
		}
		else if(e.target.id == "mayChoice"){
			screenNumber++;
			gameScreen(screenNumber);
			saveStartMonth("May");
		}
		else if(e.target.id == "juneChoice"){
			screenNumber++;
			gameScreen(screenNumber);
			saveStartMonth("June");
		}
		else if(e.target.id == "julyChoice"){
			screenNumber++;
			gameScreen(screenNumber);
			saveStartMonth("July");
		}
	}
})


document.onkeypress = function(e) {
 if(e.keyCode == 32){
 window.location.href = "/mainmenu"
}
} 

function gameScreen(screenNumber){

	fetch('/game/getNewGameScreen/' + screenNumber).then(function(response){
		if(response.status !== 200){
			console.log('problem with ajax call! ' + response.status + "msg: " + response.value);
			return;
		}

		response.text().then(function(data){
			gameContainer.innerHTML = data;
		})
	});
}


function savePlayerNames(playerNames){
	fetch('/game/savePlayerName/').then(function(response){
		if(response.status !== 200){
			console.log('problem with ajax call! ' + response.status + "msg: " + response.value);
			return;
		}

		response.text().then(function(data){
			gameContainer.innerHTML = data;
		})		
	})
}

function saveProfession(profession){
	fetch('/game/saveProfession/'+profession).then(function(response){
		if(response.status !== 200){
			console.log('problem with ajax call! ' + response.status + "msg: " + response.value);
			return;
		}

		response.text().then(function(data){
			gameContainer.innerHTML = data;
		})		
	})
}


function saveStartMonth(startMonth){
	fetch('/game/saveStartMonth/').then(function(response){
		if(response.status !== 200){
			console.log('problem with ajax call! ' + response.status + "msg: " + response.value);
			return;
		}

		response.text().then(function(data){

			gameContainer.innerHTML = data;
		})		
	})
}

function populateSettings(settings){
	document.getElementById('leaderName').innerHTML = settings.playerNames[0];
	document.getElementById('memberOne').innerHTML = settings.playerNames[1];
	document.getElementById('memberTwo').innerHTML = settings.playerNames[2];
	document.getElementById('memberThree').innerHTML = settings.playerNames[3];
	document.getElementById('memberFour').innerHTML = settings.playerNames[4];
	document.getElementById('profession').innerHTML = settings.playerProfession;
	document.getElementById('cash').innerHTML = settings.playerCash;
	document.getElementById('startMonth').innerHTML = settings.startMonth;
}
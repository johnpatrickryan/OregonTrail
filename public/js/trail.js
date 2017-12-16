function getStats(data){
	fetch('/trail/getStats/').then(function(response){
		if(response.status !== 200){
			console.log('problem with ajax call!' + response.status + "msg: " + response.value);
		}

		response.json().then(function(data){
			showStats(data);
		})		
	})	
}


function saveCurrentWeather(currentWeather){
	fetch('/game/saveCurrentWeather/').then(function(response){
		if(response.status !== 200){
			console.log('problem with ajax call! ' + response.status + "msg: " + response.value);
			return;
		}

		response.text().then(function(data){
			trailContainer.innerHTML = data;
		})		
	})
}

function saveHealth(health){
	fetch('/game/saveHealth/').then(function(response){
		if(response.status !== 200){
			console.log('problem with ajax call! ' + response.status + "msg: " + response.value);
			return;
		}

		response.text().then(function(data){
			trailContainer.innerHTML = data;
		})		
	})
}

function saveDistance(distance){
	fetch('/game/saveDistance/').then(function(response){
		if(response.status !== 200){
			console.log('problem with ajax call! ' + response.status + "msg: " + response.value);
			return;
		}

		response.text().then(function(data){
			trailContainer.innerHTML = data;
		})		
	})
}

function saveDay(distance){
	fetch('/game/saveDistance/').then(function(response){
		if(response.status !== 200){
			console.log('problem with ajax call! ' + response.status + "msg: " + response.value);
			return;
		}

		response.text().then(function(data){
			trailContainer.innerHTML = data;
		})		
	})
}

var health = 100;
var currentWeather = "Warm";
var distance = 0;
var daysTraveled = 0;
var currentPace = "Resting";
var membersLeft = 5;
var currentTerrain = "Grasslands";

function showStats(trailStats){
	console.log('populateStats');
	document.getElementById('health').innerHTML = trailStats.health;
	document.getElementById('weather').innerHTML = trailStats.currentWeather;
	document.getElementById('distance').innerHTML = trailStats.distance;
	document.getElementById('day').innerHTML = trailStats.day;
	document.getElementById('currentPace').innerHTML = trailStats.currentPace;
	document.getElementById('membersLeft').innerHTML = trailStats.membersLeft;
	document.getElementById('currentTerrain').innerHTML = trailStats.currentTerrain;
}

gameContainer.addEventListener('mousedown', function(e){
		if(e.target.id == "steady"){
            changeWeather();
            saveDistance(trailStats.distance + 20);
            death();
            deathCheck();
            winningCheck;
            
            
		}
		else if(e.target.id == "strenuous"){
            changeWeather();
            saveDistance(trailStats.distance + 25);
            saveHealth(trailStats.health -3);
            death();
            deathCheck();
            winningCheck;
		}
		else if(e.target.id == "grueling"){
            changeWeather();
            saveDistance(trailStats.distance + 30);
            saveHealth(trailStats.health -8);
            death();
            deathCheck();
            winningCheck;
		}
		else if(e.target.id == "resting"){
            changeWeather();
            saveHealth(trailStats.health +5);
            death();
            deathCheck();
            winningCheck;
		}
	}

function changeWeather(){
    var weatherchance = (math.floor(math.random() * 100) +1)
    
    if (weatherchance > 0 && weatherchance < 11){
        saveCurrentWeather("very hot");
        saveHealth(health - 8);
    }
    else if (weatherchance > 10 && weatherchance < 21){
        saveCurrentWeather("hot");
        saveHealth(health - 3);
    }
    else if (weatherchance > 20 && weatherchance < 31){
        saveCurrentWeather("cool");
        saveHealth(health + 1);
    }
    else if (weatherchance > 30 && weatherchance < 41){
        saveCurrentWeather("cold");
        saveHealth(health - 5);
    }
    else if (weatherchance > 40 && weatherchance < 51){
        saveCurrentWeather("very cold");
        saveHealth(health - 12);
    }
    else if (weatherchance > 50 && weatherchance < 61){
        saveCurrentWeather("rain");
        saveHealth(health - 4);
    }
    else if (weatherchance > 60 && weatherchance < 81){
       saveCurrentWeather("warm");
        saveHealth(health + 1);
    }
    else if (weatherchance > 80 && weatherchance < 86){
        saveCurrentWeather("heavy rain");
        saveHealth(health - 8);
    }
    else if (weatherchance > 85 && weatherchance < 91){
        saveCurrentWeather("snow");
        saveHealth(health - 15);
    }
    else if (weatherchance > 90 && weatherchance < 96){
        saveCurrentWeather("blizzard");
        saveHealth(health - 30);
    }
    else (weatherchance > 95 && weatherchance < 101){
        saveCurrentWeather("heavy fog");
        saveHealth(health - 3);
    }
    
    
}

function death(health){
    randomNumHealth = math.floor(math.random() * 100)+ 1;
    
    if (health<50 && health >=20){
        if (randomNumHealth<=3){
            membersLeft--;
        }
    }
    else if (health<20){
        if (randomNumHealth<=10&&randomNumHealth>0){
            membersLeft--;
        }
        
    }
}

function winningCheck(){
    if (distance>500 && membersLeft>0 && health>0 && daysTraveled <=50 ){
        alert("You have Won!");
    }
}

function deathCheck(){
    if (membersLeft == 0 || health <= 0 || daysTraveled > 50)
        alert("You have lost:(")
}

function trailStats(){
    this.health = 100;
    this.currentWeather = "";
    this.distance = 0;
    this.daysTraveled = 0;
    this.currentPace = "";
    this.membersLeft = 5;
    this.currentTerrain = "";
}

exports.trailStats = new trailStats();
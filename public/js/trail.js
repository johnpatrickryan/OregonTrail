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



function changeWeather(){
    var weatherchance = (math.floor(math.random() * 100) +1)
    
    if (weatherchance > 0 && weatherchance < 11){
        saveCurrentWeather("very hot");
    }
    else if (weatherchance > 10 && weatherchance < 21){
        saveCurrentWeather("hot");
    }
    else if (weatherchance > 20 && weatherchance < 31){
        saveCurrentWeather("cool");
    }
    else if (weatherchance > 30 && weatherchance < 41){
        saveCurrentWeather("cold");
    }
    else if (weatherchance > 40 && weatherchance < 51){
        saveCurrentWeather("very cold");
    }
    else if (weatherchance > 50 && weatherchance < 61){
        saveCurrentWeather("rain");
    }
    else if (weatherchance > 60 && weatherchance < 81){
       saveCurrentWeather("warm");
    }
    else if (weatherchance > 80 && weatherchance < 86){
        saveCurrentWeather("heavy rain");
    }
    else if (weatherchance > 85 && weatherchance < 91){
        saveCurrentWeather("snow");
    }
    else if (weatherchance > 90 && weatherchance < 96){
        saveCurrentWeather("blizzard");
    }
    else (weatherchance > 95 && weatherchance < 101){
        saveCurrentWeather("heavy fog");
    }
    
    
}
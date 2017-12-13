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
        weather = very hot
    }
    else if (weatherchance > 10 && weatherchance < 21){
        weather = hot
    }
    else if (weatherchance > 20 && weatherchance < 31){
        weather = cool
    }
    else if (weatherchance > 30 && weatherchance < 41){
        weather = cold
    }
    else if (weatherchance > 40 && weatherchance < 51){
        weather = very cold
    }
    else if (weatherchance > 50 && weatherchance < 61){
        weather = rain
    }
    else if (weatherchance > 60 && weatherchance < 81){
        weather  = warm
    }
    else if (weatherchance > 80 && weatherchance < 86){
        weather  = heavy rain
    }
    else if (weatherchance > 85 && weatherchance < 91){
        weather  = snow
    }
    else if (weatherchance > 90 && weatherchance < 96){
        weather  = blizzard
    }
    else (weatherchance > 95 && weatherchance < 101){
        weather  = heavy fog
    }
    
    
}
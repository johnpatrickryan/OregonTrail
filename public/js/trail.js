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
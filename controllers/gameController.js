var exports = module.exports = {};

exports.startGameScreens = [];

var startGame1 = "<div class = \"midcol\">"
	+ "<div class = \"menuOptions\"><p>What is Your Choice?</p>"
	+ "<p id=\"banker\">1. Be a banker from Boston</p>"
	+ "<p id=\"carpenter\">2. Be a carpenter from Ohio</p>"
	+ "<p id=\"farmer\">3. Be a farmer from Illinois</p>"
	+ "<p id=\"differences\">4. Discover the differences between the choices</p> </div>"
    + "<div class = \"blinkingText\" id = \"blinkText\">Press space to go to main menu</div>"
	+ "</div>";

	exports.startGameScreens.push(startGame1);

var startGame2 = "<div class=\"midcolgame\">"
	+ "<label id=\"leaderLabel\" for=\"groupLead\">Enter Leader Name</label><br><br>" 
	+ "<input type=\"text\" name=\"leaderName\" id=\"groupLead\"><br>"
	+ "<p>Enter Group Member Names</p>"
	+ "<label for=\"membOne\">Member 1:</form>"
	+ "<input type=\"text\" name=\"memberOneName\" id=\"membOne\"><br><br>"
	+ "<label for=\"membTwo\">Member 2:</form>"
	+ "<input type=\"text\" name=\"memberTwoName\" id=\"membTwo\"><br><br>"
	+ "<label for=\"membThree\">Member 3:</label>"
	+ "<input type=\"text\" name=\"memberThreeName\" id=\"membThree\"><br><br>"
	+ "<label for=\"membFour\">Member 4:</label>"
	+ "<input type=\"text\" name=\"memberFourName\" id=\"membFour\"><br>"
	+ "<input id=\"submitBut\" type=\"submit\" value=\"Next\">"
	+ "</div>";

	exports.startGameScreens.push(startGame2);

var startGame3 = "<div class=\"midcolgame\">"
	+ "<p>The year is 1848.  You start your journey on the Oregon Trail in Independence Missouri.  You must choose a month to leave Independence</p>"
	+ "<div>"
	+ "<p id=\"marchChoice\">1. March</p>"
	+ "<p id=\"aprilChoice\">2. April</p>"
	+ "<p id=\"mayChoice\">3. May</p>"
	+ "<p id=\"juneChoice\">4. June</p>"
	+ "<p id=\"julyChoice\">5. July</p>"
	+ "</div>"
	+ "<div>What is Your Choice?</div></div>";

	exports.startGameScreens.push(startGame3);

	var startGame4 = "<div class = \"midcolgame\"><p>Congratulations! You are ready to start your journey on the Oregon Trail!</p>"
		+ "<p>Here are the settings you have selected!</p>"
		+ "<div id=\"leaderName\">Wagon Leader:<div>"
		+ "<div id=\"memberOne\">Member One:<div>"
		+ "<div id=\"memberTwo\">Member Two:<div>"
		+ "<div id=\"memberThree\">Member Three:<div>"
		+ "<div id=\"memberFour\">Member Four:<div>"
		+ "<div id=\"profession\">Profession:<div>"
		+ "<div id=\"cash\">Cash:<div>"
		+ "<div id=\"startMonth\">Starting Month:<div></div>"
        + "<button id=\"starttrail\" type=\"button\"> Start Game</\"button\">"

		exports.startGameScreens.push(startGame4);

		function newData(){
			this.profession;
			this.cash;
			this.playerNames = [];
			this.startMonth;
		}

		exports.newData;





function trailStats(){
    this.health = 100;
    this.currentWeather = "Warm";
    this.distance = 0;
    this.daysTraveled = 0;
    this.currentPace = "Resting";
    this.membersLeft = 5;
    this.currentTerrain = "Grasslands";
}

exports.trailStats = new trailStats();
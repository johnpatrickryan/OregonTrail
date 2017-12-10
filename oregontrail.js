const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', function(req, res){
	res.sendFile('views/index.html', {root: __dirname})
})
app.get('/mainmenu', function(req, res){
	res.sendFile('views/mainmenu.html', {root: __dirname})
})
app.get('/topten', function(req, res){
	res.sendFile('views/topten.html', {root: __dirname})
})
app.get('/game', function(req, res){
	res.sendFile('views/game.html', {root: __dirname})
})

app.get('/trail', function(req, res){
	res.sendFile('/views/trail.html', {root: __dirname})
})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(1337, function () {
  console.log('Example app listening on port 1337!')
})

var game = require('./controllers/gameController');

app.get('/game/getNewGameScreen/:screenId', function(req, res) {
    var gameScreen = game.startGameScreens[req.params.screenId];
    res.setHeader('Content-Type', 'text/html');
    res.send(gameScreen);
})





app.get('/game/saveProfession/:profession', function(req, res){
	var gameScreen = game.startGameScreens[req.params.profession];
	var profession = req.params.profession;
	game.newData.profession = req.params.profession;
	res.setHeader('Content_Type', 'text/html');
    res.send(game.newData.profession);
})


app.get('/game/savePlayerName/:playerId/:playerName', function(req, res){

	game.newData.playerName[req.params.playerId] = req.params.playerName;

	res.setHeader('Content_Type', 'text/html');
	res.send(game.newData.playerName);
})


app.get('/game/saveStartMonth/:startMonth', function(req, res){

	var gameScreen = game.startGameScreens[req.params.startMonth];
    var startMonth = req.params.startMonth;
    game.newData.startMonth = req.params.startMonth;
	res.setHeader('Content_Type', 'text/html');
	res.send(gameScreen);
})


app.get('/game/getSettings', function(req, res){

	res.setHeader('Content_Type', 'text/html');
	res.send(gameScreen);
})
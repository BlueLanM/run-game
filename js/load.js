Game = {};

const w = 350;
const h = 350;
const score = 0;

function rand(num) { return Math.floor(Math.random() * num); }

Game.Load = function(game) { };

Game.Load.prototype = {
	create: function() {
		game.state.start("Play");
	},
	preload: function() {
	    game.stage.backgroundColor = "#34495e";
	    label = game.add.text(w / 2, h / 2, "loading...", { fill: "#fff", font: "30px Arial" });
		label.anchor.setTo(0.5, 0.5);

		game.load.spritesheet("player", "public/player.png", 20, 24);
		game.load.spritesheet("enemy1", "public/enemy1.png", 32, 36);
		game.load.spritesheet("enemy2", "public/enemy2.png", 28, 40);
	}
};
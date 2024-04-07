

function preload() {
	img = loadImage("mario05.png");
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,400);

	canvas.parent('canvas');
	instializeInSetup(mario);

	
}

function draw() {
	background("#D3D3D3");
	
	game();
}







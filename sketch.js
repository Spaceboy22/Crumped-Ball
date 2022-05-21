var ball;
var world;
var radius = 30;
var engine;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER)
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,655,800,10)
	leftSide = new Ground(500,600,20,120)
	rightSide = new Ground(700,600,20,120)

	

	//Create the Bodies Here.

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction : 0,
		density:1.2
		

	
	}
	ball=Bodies.circle(100,300,20,ball_options);
	World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,radius)
  ground.display();
  leftSide.display();
  rightSide.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:40,y:-35}) 
	}
}




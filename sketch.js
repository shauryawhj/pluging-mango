
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	box=createSprite(400,650,200,20)
	box.shapeColor= "red"
	box1=createSprite(490,620,20,100)
	box1.shapeColor= "red"
	box2=createSprite(300,620,20,100)
	box2.shapeColor= "red"


	engine = Engine.create();
	world = engine.world; 

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  box.display()
 
}




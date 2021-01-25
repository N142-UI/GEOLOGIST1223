
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1,Stone;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


    Hammer1 = new Hammer(100,100);
    Stone1 = new stone(610,220);
    ground1 = new Ground(200,height,1700,20)
    rubber1 = new rubber(200,50,1700,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  drawSprites();
  Hammer1.display();
  Stone1.display();
  ground1.display();
  rubber1.display();
}




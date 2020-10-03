const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 700);

    engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,150,250, 20)

	bob1 = new Bob(400,350,35)

	bob2 = new Bob(365,350,35)

	bob3 = new Bob(470,350,35)

	bob4 = new Bob(330,350,35)

	bob5 = new Bob(435,350,35)

  
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(205);
  
  ground.display();

  bob1.display();

  bob2.display();

  bob3.display();

  bob4.display();

  bob5.display();

  rope1.display();

  drawSprites();
 
}
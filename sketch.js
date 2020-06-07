const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var brick1;

function setup() {
   var canvas=createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  brick1=new Brick();
}

function draw() {
  background(0); 
 Engine.update(engine);
 brick1.display();
  drawSprites();
}
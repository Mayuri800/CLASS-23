const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ball,ground1;
var box1,box2;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  
  box1 = new box(200,100,50,50);
  box2 = new box(100,50,50,100);
  ground1 = new ground(200,390,400,30);
}

function draw() {
  Engine.update(engine);
  background(0);  
  
  box1.display();
  box2.display();
  ground1.display();
}
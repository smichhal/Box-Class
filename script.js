const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world, engine;
var box1;
var box2;
var ground1;


function setup () {
    createCanvas(500,500);

    engine = Engine.create();
    world = engine.world;

    

    box1 = new Box(200,300,50,50);
    box2 = new Box(230,100,50,100);
    

    ground1 = new ground(250,480,500,20);

}

function draw(){
    background("black");
    Engine.update(engine);

    box1.display();
    box2.display();

    ground1.display();

   

    

}

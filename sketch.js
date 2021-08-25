const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubberObject ;
var stoneObject ;
var ironObject ; 

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    rubberObject = new Rubber(500,10,100);
    stoneObject = new stone(500,10,80,80);
    ironObject = new iron(500,10,80,80);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubberObject.display();
    stoneObject.display();
    ironObject.display();
 
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	crumpledPaper = new Paper();
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  crumpledPaper.display();
  groundObject.display();
  dustbinObj.display();

}
function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:90,y:-205});
    }
	//if(keyCode === LEFT_ARROW){
        //Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:-74,y:0});
    //}
}

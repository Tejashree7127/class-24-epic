const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var rock
var rock2
var pl,pl2
var plarrow,plArcher


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  rock= new Base(200,400,200,200); 
  rock2= new Green(1000,400,200,200);
  pl= new Play(250,220,100,200)
  pl2= new Computer(1050,220,100,200);
  plarrow = new Arrowplayer(370,300,60,50)
  plArcher=new Bowplayer(375,300,200,100,100)

  //pl.scale=0.5
  
  

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   rock.display();
   rock2.display();
   pl.display();
   pl2.display();
   plarrow.display();
   plArcher.display();
 
   //display Player and computerplayer
   if (keyCode===32){
    plarrow.shoot(plarrow.body.angle)
    console.log(keyCode)
  }

}

 

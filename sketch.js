const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;
var computerArcher, playerArcher;

var arrow,arrow2;

//var arr2=[[1,2],[5,6],[8,9],[10,11]]


function setup() {
 
   //console.log(arr2[1][1]) 
   //console.log ( arr2[3][1] )


  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object
  playerBase = new PlayerBase(300,
     random(450, height - 300),
      180, 150);
      
  player = new Player(285, playerBase.body.position.y - 153,
     50, 180); 
     
  playerArcher = new PlayerArcher( 350, playerBase.body.position.y - 180,
     120, 120 );
     
  computerBase = new ComputerBase( width - 300, random(450, height - 300),
     180, 150 ); 

  computer = new Computer( width - 280, computerBase.body.position.y - 153,
     50, 180 );
     
  computerArcher = new ComputerArcher( width - 340, computerBase.body.position.y - 180,
     120, 120 );

  //arrow2 = new ComputerArrow(width-340, computerBase.body.position.y - 180, 100, 10);
  arrow = new PlayerArrow(350, playerBase.body.position.y - 180, 100, 10);
  //Create an arrow Object
  
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  //playerArcher.display();
  computerArcher.display()
  playerArcher.display()


  //Display arrow();
  arrow.display();
  //arrow2.display();

  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode === 32){
     arrow.shoot(playerArcher.body.angle);
  }
  
    //Call shoot() function and pass angle of playerArcher
}

function keyReleased(){
  if(keyCode === 32){
    arrow2.shoot(playerArcher.angle);
   }
 }


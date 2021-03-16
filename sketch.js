const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   

    box1 = new Box(700,320,50,50);
    box2 = new Box(700,320,50,50);
    box3 = new Box(700,320,50,50);
    box4 = new Box(700,320,50,50);
    box5 = new Box(700,320,50,50);

    box6 = new Box(800,320,50,50);
    box7 = new Box(800,320,50,50);
    box8 = new Box(800,320,50,50);
    box9 = new Box(800,320,50,50);
    box10 = new Box(800,320,50,50);

    box11 = new Box(900,320,50,50);
    box12 = new Box(900,320,50,50);
    box13 = new Box(900,320,50,50);
    box14 = new Box(900,320,50,50);
    box15 = new Box(900,320,50,50);

    box16 = new Box(600,320,50,50);
    box17 = new Box(600,320,50,50);
    box18 = new Box(600,320,50,50);
    box19 = new Box(600,320,50,50);
    box20 = new Box(600,320,50,50);

    box21 = new Box(1000,320,50,50);
    box22 = new Box(1000,320,50,50);
    box23 = new Box(1000,320,50,50);
    box24 = new Box(1000,320,50,50);
    box25 = new Box(1000,320,50,50);


    ball = new Ball(100,150);

    //log6 = new Log(230,180,80, PI/2);
   sling1 = new SlingShot(ball.body,{x: 300 , y: 100});
}

function draw(){
    background(0);
    Engine.update(engine);
    //strokeWeight(4);

    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();

    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();

    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();

   
   ball.display();
   
   // log6.display();
    sling1.display();
    
}


function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   // sling1.fly();
}
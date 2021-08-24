var ghost
var ghostImage,ghostG
var DudeRunning, DudeRunningImage
var gameOver,gameOverImage
var score = 0

var PLAY=1;
var END=0;
var gameState=1;

function preload(){

    ghostImage = loadImage("ghost-standing.png");
    DudeRunningImage = loadImage("Runner-1.png");//"Runner-2.png")
    gameOverImage = loadImage("gameOver.png")
    }
  
  function setup() {
    createCanvas(windowWidth, windowHeight);

    //making Dude

    DudeRunning = createSprite(600,300);
    DudeRunning.addImage("running",DudeRunningImage)
    DudeRunning.scale = 0.08

    ghostG=new Group();
    DudeRunning.setCollider("circle",100,100,40);
    DudeRunning.debug = true
  }
  
  function draw() {

    if(gameState===PLAY){
    background("black");

   //displaying score
   text("Score: "+ score, 100,50);

   score = score + Math.round(frameCount/60);

   // making edges
    rightEdge = createEdgeSprites();
    leftEdge = createEdgeSprites();
    DudeRunning.collide(rightEdge);
    DudeRunning.collide(leftEdge);


    if(keyDown("right_arrow")){
     DudeRunning.x = DudeRunning.x +7
    }
  
    if(keyDown("left_arrow")){
     DudeRunning.x = DudeRunning.x -7
    }

    spawnGhostSprites();
}


    if(ghostG.isTouching(DudeRunning)){
    gameState=END;
    gameOver.visible = true

    }

    
    drawSprites();
  }


 function spawnGhostSprites(){
    // making the ghost

    if(frameCount % 23 === 0){
    ghost = createSprite(100,600);
    ghost.addImage("ghost",ghostImage)
    ghost.scale = 0.4

    ghost.x = Math.round(random(1000,100))
    ghost.velocityY = -9;
  
    ghost.lifetime = 650
    ghostG.add(ghost)
    }
 }
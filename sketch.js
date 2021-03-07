var ground
var groundI
var dog 
var dogA
var cat 
var catA
var fenceI
var bushI
var fence
var bush

function preload(){
groundI = loadImage('images/background.png')
dogA = loadAnimation('images/dog1.png','images/dog2.png','images/dog3.png')
catA = loadAnimation('images/cat1.png','images/cat2.png','images/cat3.png')
bushI = loadImage('images/bush.png')
fenceI = loadImage('images/fence.png')
}

function setup() {
  createCanvas(800,400);
  
  ground = createSprite (200,20,10,10)
  ground.addImage(groundI)
  ground.velocityX = -5
  dog = createSprite(138,334)
  dog.addAnimation('runing dog',dogA)
  dog.scale=1.5
  cat =createSprite( 610,344)
  cat.addAnimation('running cat',catA)
  cat.scale = 1.5
  
}



function draw() {
  background(255,255,255);
  if(ground.x <0) {
    ground.x = 200 
  }
  createfence()
  drawSprites();
  text(mouseX + ', '+mouseY, 50,50)
}

function createfence(){
  if(frameCount % 60 == 0) {
    bush = createSprite(798,342)
    bush.addImage(bushI)
    bush.scale = 0.3
    
    fence = createSprite(777,342)
    fence.addImage(fenceI)
    fence.scale = 0.5
    
  }
  console.log(frameCount)
}


  



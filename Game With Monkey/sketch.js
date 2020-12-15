PLAY = 1
var gameState = PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var OverGame
var bananaGroup

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(900,400)
 ground=createSprite(900,400, 900000, 100)
monkey=createSprite(100,300)
  monkey.addAnimation("running", monkey_running)
  monkey.scale = 0.3
  score = 0
  FoodGroup = new Group()
  obstacleGroup = new Group()
  bananaGroup = new Group()
  
}


function draw() {
 
  background(900) 
  if(gameState === PLAY){
    score = score + Math.round(getFrameRate()/60);
if(keyDown("up")){
    monkey.velocityY = -10 ; 
  
  }
   if(monkey.isTouching(obstacleGroup)){
   
     FoodGroup.setVelocityXEach(0);
     obstacleGroup.setVelocityXEach(0);
     gameState = "END"; 
 }

    
    function spawnObstacle(){
  obstacle=createSprite(1000,300)
  obstacle.addImage(obstaceImage)
  obstacle.velocityX = -10
  obstacle.scale = 0.2
    obstacleGroup.add(obstacle)
  
// monkey.debug = true
    monkey.setCollider("circle")
}

  ground.velocityX = -10
 if(ground.x < 0){
    ground.x = ground.width/2
    monkey.velocityY = -10
  }
  if(frameCount%90===0){
    //spawnbanana()
     banana=createSprite(1000,300)
   banana.addImage(bananaImage)
  banana.scale = 0.3
   banana.velocityX=-10
    FoodGroup.add(banana)
    bananaGroup.add(banana)
    if(gameState === "END"){
      
      
    }
  }
  if(frameCount%50===0){
    spawnObstacle()
  }
  }
  text("Score: "+ score, 500,50);
   
  if(gameState === "END"){

 
  text("GAME OVER", 350,200)

  monkey.destroy()
  
  monkey.velocityX=monkey.velocityX+1
 
    
}
  monkey.velocityY = monkey.velocityY+0.5
  monkey.collide(ground)
  if(monkey.isTouching(FoodGroup)){
   banana.destroy()
     
  }
 
  
 
  drawSprites()
}


  
 
 
  






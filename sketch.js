var bananaimage,obstacleimage,obstaclegroup,foodgroup,backdrop,backdropimage;
var score;
var monkeyimage,monkey;
var back;
var play = 1;
var end = 0;
var gamestate = play;
var ground;

function preload(){
backdropimage = loadImage("jungle.jpg");
  monkeyimage = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

  bananaimage = loadImage("banana.png");
  obstacleimage = loadImage("stone.png");
}

function setup() {
  createCanvas(800, 400);
  backdrop = createSprite(0,0,800,400);
 backdrop.addImage(backdropimage);
  backdrop.velocityX = -3
monkey = createSprite(100,340,20,50);
  backdrop.x = backdrop.width/2;
monkey.addAnimation("monkey",monkeyimage);
monkey.scale = 0.1;
ground = createSprite(200,350,800,10);
ground.x = ground.width/2;
ground.velocityX = -4;
  ground.visible = false;
  backdrop.scale = 1.5;
  foodgroup = new Group();
  obstaclegroup = new Group();
  score = 0;
}






function draw() {
  background(220);
  if(backdrop.x<0){
     backdrop.x=backdrop.width/2;
     }
   if(ground.x<0){
     ground.x=ground.width/2;
     }
  monkey.collide(ground);
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
 monkey.velocityY = monkey.velocityY+1; 
  spawnObstacles();
  spawnfood();
  if(foodgroup.isTouching(monkey)){
    foodgroup.destroyEach();
    score = score+2;
  }
  switch(score){
   case 10:monkey.scale = 0.12;
      break;
        case 20:monkey.scale = 0.14;
      break;
        case 30:monkey.scale = 0.16;
      break;
        case 40:monkey.scale = 0.18;
      break;
      default: break;
  }
  if(obstaclegroup.isTouching(monkey)){
    monkey.scale = 0.08;
  }
  drawSprites();
  fill("white");
  textSize(20);
  text("Score"+score,500,50);
}

function spawnObstacles(){
  if (frameCount%300===0){
   var monster = createSprite(800,320,20,20); 
   monster.addImage("Stone",obstacleimage);
   monster.velocityX = -6;
   monster.lifetime = 180;
   monster.scale = 0.15;
   obstaclegroup.add(monster);
  }
}
function spawnfood(){
if (frameCount%80===0) {
  var fruit = createSprite(800,250,40,10);
  fruit.velocityX = -5;
  fruit.addImage("Banana",bananaimage);
  fruit.scale = 0.05;
  fruit.y = random(50,340);
  fruit.lifetime = 200;
  foodgroup.add(fruit);
}
}












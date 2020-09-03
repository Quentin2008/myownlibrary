var mrect, frect

function setup() {
  createCanvas(1200,800);
  frect=createSprite(400, 200, 50, 80);
  mrect=createSprite(200, 200, 80, 50);
  frect.shapeColor="green";
  mrect.shapeColor="green";
  gameo1=createSprite(600,100,50,50);
  gameo2=createSprite(600,300,50,50);
  gameo1.shapeColor="green";
  gameo2.shapeColor="green";
  gameo1.velocityY=5;
  gameo2.velocityY=-5;
}

function draw() {
  background(0);
  mrect.x=World.mouseX;
  mrect.y=World.mouseY;
  bounceOff(gameo1,gameo2);
 if(isTouching(mrect,frect)) {
  frect.shapeColor="blue";
  mrect.shapeColor="blue";
 }
 else{
  frect.shapeColor="green";
  mrect.shapeColor="green";
 }
  drawSprites();
}

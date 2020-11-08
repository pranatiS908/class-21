var fixedRect, movingRect

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200,200,50,80);
  fixedRect.shapeColor="green"
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="green"
  movingRect.velocityX=-3
  fixedRect.velocityX=3
}

function draw() {
  background(0,0,0);
 bounceOff(movingRect,fixedRect);
  drawSprites();
}

var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (hello(movingRect,fixedRect)){
   movingRect.height=200
   fixedRect.width=300

  }
  else {
    movingRect.height=30
    movingRect.width=80
    fixedRect.width=50
    fixedRect.height=80
  }
  drawSprites();
}



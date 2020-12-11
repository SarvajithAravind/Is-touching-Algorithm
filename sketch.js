var fixedrect, movingrect;


function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(200, 200, 50, 80);
  fixedrect.shapeColor = "orange";
  movingrect = createSprite(400,200,50,30);
  movingrect.shapeColor = "yellow";
}

function draw() {
  background(0,0,0);  
  movingrect.x = World.mouseX;
  movingrect.y= World.mouseY;
  if(movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2
    && fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2
    && movingrect.y - fixedrect.y < fixedrect.width/2 + movingrect.width/2
    && fixedrect.y - movingrect.y < fixedrect.width/2 + movingrect.width/2){
    fixedrect.shapeColor = "red";
    movingrect.shapeColor = "red";
  }
  else{
    fixedrect.shapeColor = "green";
    movingrect.shapeColor = "green";
  }

  drawSprites();
}
var quadrado 
function setup() {
  createCanvas(400,400);
  quadrado = createSprite (200,200,50,20)
  quadrado.shapeColor = ("white")
}

function draw() 
{
  background(30);
  if (keyDown ("up")) {
    quadrado.y = quadrado.y-3
  }

drawSprites ()
}





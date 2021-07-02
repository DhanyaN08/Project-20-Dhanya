//DESIGN OF ALGORITHM
//variables 
var wall,car

//preload

//setup
function setup() {
  createCanvas(400,400);
  wall = createSprite(400,200,50,300)
  car = createSprite(100,300,70,50)
  
  wall.shapeColor = "red"
  car.shapeColor ="orange"

  wall.debug = true
  car.debug = true

  edges=createEdgeSprites()
}

//draw
function draw() {
  background(5); 
  
  //moving car rectangle 
  car.x = mouseX
  car.y = mouseY

if(wall.x - car.x < wall.width/2 +car.width/2
  && car.x - wall.x < wall.width/2 +car.width/2
  && wall.y-car.y < wall.height/2+car.height/2
  && car.y-wall.y < car.height/2+car.height/2){
  wall.shapeColor = "lavender"
  car.shapeColor ="lavender"  
}
else{
  wall.shapeColor = "pink"
  car.shapeColor ="yellow"
}
  
  drawSprites();
}
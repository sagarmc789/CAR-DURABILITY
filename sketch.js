var car,wall

var speed,weight


function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);

  wall=createSprite(1500,200,50,height/2)

  speed=random(55,90)

  weight=random(400,1500)
}

function draw() {
  background("black");  
  
  car.velocityX=speed
  

  if(wall.x-car.x<wall.width/2+car.width/2){

    car.velocityX=0
    var deform=0.5*weight*speed*speed/22500

    if(deform>180){
      car.shapeColor="red"
    }
    
if(deform<180 && deform>100){
  car.shapeColor="yellow"
}
   
if(deform<100){
  car.shapeColor="green"
}
  }
  drawSprites();
}
var  wall , speed , weight
var thickness,bullet


function setup() {
  createCanvas(1600,400);
  

  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)

  bullet = createSprite(50,200,100,5)

  wall = createSprite(1500,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)

  bullet.velocityX=speed
}

function draw() {
  background(255,255,255);  
  drawSprites();

if (wall.x - bullet.x < (bullet.width+wall.width)/2){
bullet.velocityX=0

var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
console.log(damage)
if (damage>10){
  bullet.shapeColor=color(255,0,0)
}
if (damage<10){
  bullet.shapeColor=color(0,255,0)
}





}



}
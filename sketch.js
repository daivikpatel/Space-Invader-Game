var spaceship,invader,laser;




function preload(){
    spaceship=loadImage("space invader ship.png");
}



function setup(){
  createCanvas(600,200)
  
  spaceship=createSprite(70, 30);
  spaceship.addImage("space invader ship.png",spaceship);
  spaceship.scale=0.8;

}



function draw(){
  background(220);



  drawSprites();
}
//Melinda Buckner Copyright 2016
var r = 0;
var t = 0;
var ry = 0;
var ty = 0;
var bDir = 0;
var speed = 2;

function setup(){
  createCanvas(700,600);
  background(40, 15, 0);
}

function draw() {
  push();
  noStroke();
  fill(random(150), random(50), random(50), 150);
  translate(width/2,height/2);
  rotate(frameCount/80.0);
  rect(30, 30,random(200-400),random(200-400));
  pop();

  }
  function mouseReleased() {
   charGen(mouseX, mouseY, 100);

   }

 function rectmove(x, y, size){

 }

 function charGen(eyes, mouth, body) {

   eY = height/2;

   push();
   //body
   noStroke();
   fill(random(175), random(175), random(20), 100);
   translate(width/2,height/2);
   rotate(frameCount/80.0);
   ellipse(20, 20, random(400-1100), random(400-1100));
   pop();

  push();
   //eyes
   noStroke();
  fill(random(250), random(200), 150);
  rectMode(CENTER);
  ellipse(width/2, eY-5*random(2), map(eyes, 0, width, 10, 10), 10);
  pop();

  push();
   //eyes
   noStroke();
  fill(random(200), random(250), 200);
  rectMode(CENTER);
  ellipse(width/2, eY-10*random(3), map(eyes, 0, width, 5, 5), 5);
  pop();

  push();
   //eyes
   noStroke();
  fill(random(250), random(250), 250);
  rectMode(CENTER);
  ellipse(width/2, eY-15*random(1), map(eyes, 0, width, 5, 5), 5);
  pop();
    }

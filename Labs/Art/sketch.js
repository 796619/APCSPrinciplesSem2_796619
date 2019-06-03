//Global variables
var Balls = [];
var b1;
var toggle = true;

function setup(){
  var cnv = createCanvas(600, 600);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadBalls(1000);
  b1 = new Ball(createVector(width/2, height/2), createVector(2,5), 100, color(255, 0, 0));
}

function loadBalls(number){
  for(var i = 0; i < number; i = i + 1){
    var loc = createVector(random(width), random(height));
    var vel = createVector(random(-3,3), random(-3,3));
    var rad = random(20, 40);
    var col = color(random(255), random(255), random(255));
    Balls.push(new Ball(loc, vel, rad, col));
  }
}



function draw(){
  if(toggle){
    //background(0, 0, 0, 200);
    b1.run();
    for(var i = 0; i < Balls.length; i = i + 1){
      Balls[i].run();
    }
  }
}

function mouseClicked(){
  toggle = !toggle;
}

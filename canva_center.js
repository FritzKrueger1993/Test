function setup() {
initialCanva();
}

function draw() {
  fill(0);
  rect(10,10,width*0.5,height*0.25);

}

function windowResized (){
initialCanva();
}

function initialCanva() {
  var cnv = createCanvas(720, 3000);
  var x = (windowWidth - width) *0.5;
  var y = 10;
  cnv.position(x, y);
  background(255, 0, 200);
}

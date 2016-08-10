var c;

function square(x, y, side) {
  fill(c); //USE C AS FILL COLOR
  rect(x, y, side, side);
}

function setup() {
  createCanvas(640, 480);
  c = color(175, 100, 220); //DEFINE COLOR PURPLE
  background(100);
  blueValue = blue(c);
  println(blueValue);
  fill(0, 0, blueValue);
  rect(10, 10, 10, 15);
  rect(40, 35, 10, 15);
  colorMode(HSB, 255);
  c = color(0, 126, 255);
  fill(c);
  rect(15, 20, 35, 60);

  value = saturation(c); // Sets 'value' to 126
  fill(value);
  rect(50, 20, 35, 60);
  rect(60, 60, 45, 60);

  square(120, 120, 120, 120);

}


function draw() {

}
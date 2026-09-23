let x, y, d;

function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);

  x = 0;
  y = height / 2;
  d = height / 5;
}

function draw() {
  // Set background
  background(0);

  fill(255 * (1 - x / width), 255 * (x / width), 0); // from red to green
  circle(x, y, (d / width) * x); // from 0 to d

  x += 5;
  x %= width; // loop around
}

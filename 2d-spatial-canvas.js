// declare arrays to store multiple values
let xPositions = [100, 200, 300, 400];
let yPositions = [150, 250, 350, 450];

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(240);
  
  // loop through all positions in the arrays
  for (let i = 0; i < xPositions.length; i++) {
    // draw a circle at each stored position
    ellipse(xPositions[i], yPositions[i], 30, 30);
  }
}
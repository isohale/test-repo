// Create a new p5.js instance for the second canvas
const sketch2 = new p5((p) => {
  // declare arrays to store multiple values
  let xPositions = [100, 200, 300, 400];
  let yPositions = [150, 250, 350, 450];

  p.setup = function() {
    p.createCanvas(640, 480, p.P2D, 'canvas-container-2');
  };

  p.draw = function() {
    p.background(240);
    
    // loop through all positions in the arrays
    for (let i = 0; i < xPositions.length; i++) {
      // draw a circle at each stored position
      p.ellipse(xPositions[i], yPositions[i], 30, 30);
    }
  };
});
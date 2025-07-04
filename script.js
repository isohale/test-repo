// Create a new p5.js instance for the first canvas
const sketch1 = new p5((p) => {
  // The setup code section runs once at launch
  p.setup = function() {
    // prepare a 2-D canvas
    // the variables define the x and y axes of the canvas
    let canvas = p.createCanvas(640, 480);
    canvas.parent('canvas-container-1');
  };

  // The draw code section runs 60 frames per second 
  p.draw = function() {
    // this variable defines the background color - it is set to blue
    p.background(0,0,250);
    // you add your drawing code below
  };
});

var screenWidth = screen.width;
var screenHeight = screen.height;
var randomFloorPattern = [];
var randomTablePattern = [];
var firstRun;

function setup() {
  myCanvas = createCanvas(screenWidth, screenHeight);
  myCanvas.parent("sketch-holder");
  background(219, 219, 219);
  for(let x = 0; x < screenWidth * ((screenHeight/3) / 20) ; x+=(screenWidth / 50))
  {
    randomFloorPattern.push(Math.floor(Math.random() * 3));
  }
  firstRun = 0;
}

function draw(){
  // console.log(mouseX + ", "+mouseY);
  drawFloor();
  populateWithTables(200, 150, 30);
}

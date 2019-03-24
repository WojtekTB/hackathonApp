var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
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
  console.log(screenWidth);
  console.log(screenHeight + " h");
}

function draw(){
  // console.log(mouseX + ", "+mouseY);
  drawFloor();
  populateWithTables(200, 150, 30);
  drawPerson(200, 200, `rgb(255, 0, 0)`, `rgb(50, 50, 50)`, "Jordan", 0, 20);
}

function drawPerson(x, y, shirtColor, skinColor, name, sittingBoolien, scale)
{
  let x1 = x;
  let x2 = x - scale;
  let x3 = x+scale;
  let y1 = y;
  let y2 = y+scale*2;
  let y3 = y+scale*2;
  let context = canvas.getContext('2d');
  context.fillStyle = shirtColor;
  context.strokeStyle = `rgb(0,0,0)`;
  triangle(x1, y1, x2, y2, x3, y3);
  context.fillStyle = skinColor;
  circle(x1, y1, scale*0.6);
}

// function personMove(direction)
// {
//   switch (direction) {
//     case 0:
//       move = right;
//       break;
//     default:
//
//   }
// }

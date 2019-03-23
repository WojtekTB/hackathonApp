var screenWidth = screen.width;
var screenHeight = screen.height;
var randomFloorPattern = [];

function setup() {
  myCanvas = createCanvas(screenWidth, screenHeight);
  myCanvas.parent("sketch-holder");
  background(219, 219, 219);
  for(let x = 0; x < screenWidth * ((screenHeight/3) / 20) ; x+=(screenWidth / 50))
  {
    randomFloorPattern.push(Math.floor(Math.random() * 3));
  }
}

function draw(){
  drawFloor();
}


function drawFloor()
{
  coloredRect(-1 , (2*screenHeight)/3, screenWidth+1, screenHeight, floorColor[0]);
  let j = 0;
  let previousX = 0;
  let previousY = (2*screenHeight)/3;
  let nextY = 20;
  for(let z = 0; z < (screenHeight/3) / 20; z++)
  {
    for(let x = 0; x < screenWidth; x = x + (screenWidth / 40))
    {
      coloredRect(previousX , previousY, previousX + (screenWidth / 50), 20, floorColor[randomFloorPattern[j]]);
      previousX = previousX + (screenWidth / 40);
      j++;
    }
    previousX = 0;
    previousY = previousY + 20;
  }
}


function onClick()
{
  alert("hello World");
}

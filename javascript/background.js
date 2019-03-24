var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
var randomFloorPattern = [];
var randomTablePattern = [];
var firstRun;
var guestShirtColorListLocal = []
var guestNameListLocal = [];
var frame = 0;

function setup() {
  console.log(guestNameListLocal);
  console.log(guestShirtColorListLocal);
  myCanvas = createCanvas(screenWidth, screenHeight);
  myCanvas.parent("sketch-holder");
  background(219, 219, 219);
  for(let x = 0; x < screenWidth * ((screenHeight/3) / 20) ; x+=(screenWidth / 50))
  {
    randomFloorPattern.push(Math.floor(Math.random() * 3));
  }
  firstRun = 0;
  updateValues();
}

function clearAllValues()
{
  guestNameListLocal = [];
  guestShirtColorListLocal = [];
}

function updateValues()
{
  guestNameListLocal = JSON.parse(localStorage.getItem("names"));
  guestShirtColorListLocal = JSON.parse(localStorage.getItem("shirtColor"));
}
function draw(){
  console.log(mouseX + ", "+mouseY);
  // console.log(frame);
  if(frame === 50)
  {
    console.log(guestNameListLocal === JSON.parse(localStorage.getItem("names")));
    if (guestNameListLocal === JSON.parse(localStorage.getItem("names")))
    {
      // console.log("something changed in storage");
      // console.log(guestNameListLocal);
      updateValues();
      // console.log(guestNameListLocal);
      frame = 0;
    }
    else {
      frame = 0;
    }
  }
  drawFloor();
  populateWithTables(200, 150, 30);
  drawPerson(80, 550, `rgb(255, 0, 0)`, `rgb(50, 50, 50)`, "Jordan", 20);
  drawPerson(229, 567, `rgb(255, 0, 0)`, `rgb(50, 50, 50)`, "David", 20);
  drawPerson(406, 550, `rgb(255, 255, 0)`, `rgb(50, 50, 50)`, "Claire", 20);
  drawPerson(459, 711, `rgb(255, 215, 255)`, `rgb(50, 50, 50)`, "Conor", 20);
  drawPerson(95, 819, `rgb(255, 40, 60)`, `rgb(50, 50, 50)`, "Claire", 20);
  drawPerson(905, 619, `rgb(255, 40, 60)`, `rgb(50, 50, 50)`, "Claire", 20);
  drawPerson(95, 819, `rgb(255, 40, 60)`, `rgb(50, 50, 50)`, "Claire", 20);
  drawPerson(867, 819, `rgb(255, 40, 60)`, `rgb(50, 50, 50)`, "Claire", 20);

    for(let x = 0; x < guestNameListLocal.length; x++)
    {
      drawPerson(openChairXList[x], openChairYList[x], guestShirtColorListLocal[x], null, guestNameListLocal[x], 20);
    }
  frame++;
}

function updateLocalStorage()
{
  localStorage.setItem("names", JSON.stringify(guestNameList));
  localStorage.setItem("shirtColor", JSON.stringify(guestShirtColorList));
  localStorage.setItem("guestX", JSON.stringify(guestXList));
  localStorage.setItem("guestY", JSON.stringify(guestYList));
  localStorage.setItem("guestIsOnScreenList", JSON.stringify(guestIsOnScreenList));
  localStorage.setItem("openChairY", JSON.stringify(openChairYList));
  localStorage.setItem("openChairX", JSON.stringify(openChairXList));
}

function drawPerson(x, y, shirtColor, skinColor, name, scale)
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
  context.fillStyle = skinColor;
  text(name, x1 - (name.length)/2*6, y1 - scale);
}

function processGuest()
{
  for(let x = 0; x < guestNameList.length-1; x++)
  {
    if(guestIsOnScreenList[x] === `0`)
    {
    console.log("2");
      guestXList[x] = 10;
      guestYList[x] = openChairYList[openChairYList.length-1];
      guestWalkToChair(x);
      console.log(guestXList);
      updateLocalStorage();
    }
    else {
      drawPerson(guestXList[x], guestYList[x], guestShirtColorList[x], null, guestNameList[x], 20);
      updateLocalStorage();
    }
  }
}

function guestWalkToChair(x)
{
  if(openChairXList.length===0)
  {}
   drawPerson(guestXList[x], guestYList[x], guestShirtColorList[x], null, guestNameList[x], 20);
   guestXList[x]++;
   console.log(guestXList[x]);
   if(guestXList[x] === openChairXList[openChairYList.length-1])
     {
       openChairXList.pop();
       openChairYList.pop();
       guestIsOnScreenList[x] = 1;
       console.log(guestXList[x]);
     }
     updateLocalStorage();
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

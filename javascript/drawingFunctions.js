function coloredRect(x, y, width, height, color)
{
  let context = canvas.getContext('2d');
  context.fillStyle = color;
  context.strokeStyle = color;
  rect(x, y, width, height);
}


function populateWithTables(difX, difY, stagger)
{
// console.log(randomTablePattern);
  if(firstRun === 0)
  {
    for(let x = 0; x < (screenWidth / difX)*((2*(screenHeight-50))/3/difY); x++)
    {
      randomTablePattern.push(Math.floor(Math.random() * stagger));
    }
    firstRun = 1;
  }
  let startX = 40;
  let startY = (2*(screenHeight-50))/3 ;
  let placeholder = (2*(screenHeight-50))/3
  let j = 0;
  for(let z = 0; z < placeholder/difY; z++)
  {
    for(let x = 0; x < ((screenWidth - 200) / difX); x++)
    {
      drawTable(startX+randomTablePattern[x], startY + randomTablePattern[j]/2, 40);
      openChairXList.push(startX+randomTablePattern[x]);
      openChairYList.push(startY + randomTablePattern[j]/2);
      startX += difX;
      j++;
    }
    startY = startY+difY;
    startX = 40;
    updateLocalStorage();
  }
}

function drawFloor()
{
  coloredRect(-1 , (2*screenHeight)/3 - 30, screenWidth+1, screenHeight, floorColor[0]);
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

function drawTable(x, y, scale)
{
  let context = canvas.getContext('2d');
  context.strokeStyle = `rgb(0,0,0)`;
  context.fillStyle = `rgb(90,90,90)`;
  let legX = x-scale/8;
  let legY = y;
  rect(legX, legY, scale/4, scale*0.9);
  context.fillStyle = tableColor;
  ellipse(x, y, scale*2, scale);
}


function drawLine(x1, y1, x2, y2, color)
{
  var context = canvas.getContext('2d');
  context.strokeStyle = color;
  context.beginPath();
   context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
}

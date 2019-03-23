function coloredRect(x, y, width, height, color)
{
  let context = canvas.getContext('2d');
  context.fillStyle = color;
  context.strokeStyle = color;
  rect(x, y, width, height);
}


function drawLine(x1, y1, x2, y2, color)
{
  var context = canvas.getContext('2d');
  context.strokeStyle = color;
  // Reset the current path
  context.beginPath();
  // Staring point (x1,y1)
   context.moveTo(x1, y1);
  // End point (x2,x1)
  context.lineTo(x2, y2);
  // Make the line visible
  context.stroke();
}

const gridSize = 10;
const cellSize = 35;
const cellSizePx = `${cellSize}px`;

const canvas = document.getElementsByClassName('canvas')[0];

canvas.style.width = cellSizePx;
canvas.style.height = cellSizePx;

const xLine = document.createElement("div");
xLine.classList.add("line");
xLine.classList.add("x");
xLine.style.height = cellSizePx;

const yLine = document.createElement("div");
yLine.classList.add("line");
yLine.classList.add("y");
yLine.style.width = cellSizePx;

canvas.appendChild(xLine);
canvas.appendChild(yLine);

for (let x = -gridSize; x <= gridSize; x++) {
  for (let y = -gridSize; y <= gridSize; y++) {
    const positionX = x * cellSize;
    const positionY = y * cellSize;
    const cell = document.createElement("div");
    cell.classList.add('cell');
    cell.innerHTML = `${x}, ${y}`;
    cell.style.left = `${positionX}px`;
    cell.style.bottom = `${positionY}px`;
    cell.style.width = cellSizePx;
    cell.style.height = cellSizePx;

    // here ----
    
    if (x === y) {
      cell.style.backgroundColor = 'yellow';
    }
  
    if (x === -y) {
      cell.style.backgroundColor = 'orange';
    }
    
    // 1
    
    // const fitstLeftPart = x - y >= -4;
    // const fitsRightPart = x + y <= 4;
    // if (fitstLeftPart && fitsRightPart && y >= 0) {
    //   cell.style.backgroundColor = 'green';
    // }
    
    
    // 2
    
    //
    // const fitsBottomTriangle = x >= y && x <= -y && y > -3;
    // const fitsTopTriangle = x <= y && x >= -y && y < 3;
    //
    // if (fitsBottomTriangle || fitsTopTriangle) {
    //   cell.style.backgroundColor = 'green';
    // }

    
    
    // 3
    
    const circleRadius = 1;
    const triangleLength = 2;
    
    const dX = 0 - x;
    const dY = 0 - y;
    
    const dXvKvadrate = Math.pow(dX, 2);
    const dYvKvadrate = Math.pow(dY, 2);
   
    const sum = dXvKvadrate + dYvKvadrate;
    const distance = Math.sqrt(sum);
  
    const fitsTriangle = x >= -y - triangleLength  && x <= 0 && y <= 0;
    const fitsCircle = distance <= circleRadius;
  
  
    if (fitsTriangle || fitsCircle){
      cell.style.backgroundColor = 'green';
    }
  
      // if (x === y) {
    //   cell.style.backgroundColor = 'green';
    // }
    
    // --------
    
    canvas.appendChild(cell);
  }
}

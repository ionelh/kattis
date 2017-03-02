// Problem: https://open.kattis.com/problems/logo

const PI = Math.PI;
let line = readline();
let results = [];
let index = -1;

let xPos;
let yPos;
let deg;

while (line = readline()) {
  if (!isNaN(line)) {
    if (xPos && yPos) {
      computeAndPushTCResults(xPos, yPos, index);
    }
    
    xPos = 0;
    yPos = 0;
    deg = 0;
    index += 1;
    continue;
  }
  
  const splitLine = line.split(' ');
  let tmpDeg;
  switch (splitLine[0]) {
    case 'lt':
      deg += Number(splitLine[1]);
      deg = deg % 360;
      break;
    case 'rt':
      deg -= Number(splitLine[1]);
      deg = deg % 360;
      break;
    case 'fd':
      xPos += Math.cos(deg * (PI / 180)) * Number(splitLine[1]);
      yPos += Math.sin(deg * (PI / 180)) * Number(splitLine[1]);
      break;
    case 'bk':
      tmpDeg = deg;
      tmpDeg = 180 + tmpDeg;
      tmpDeg = tmpDeg % 360;
      xPos += Math.cos(tmpDeg * (PI / 180)) * Number(splitLine[1]);
      yPos += Math.sin(tmpDeg * (PI / 180)) * Number(splitLine[1]);
      break;
  }
}

computeAndPushTCResults(xPos, yPos, index);

function computeAndPushTCResults(xPos, yPos, index) {
  results[index] = Math.round(
    Math.sqrt(
      Math.pow(Math.abs(xPos), 2) + Math.pow(Math.abs(yPos), 2)
    )
  );
}

print(results.join('\n'));

// Problem: https://open.kattis.com/problems/logo2

const PI = Math.PI;
let line = readline();
let results = [];
let index = -1;

let xPos;
let yPos;
let deg;
let ltDeg;
let rtDeg;
let ltCount;
let rtCount;
let missingFor;
let lastDeg;

while (line = readline()) {
  if (!isNaN(line)) {
    if (xPos !== undefined && yPos !== undefined) {
      if (missingFor === 'fd' || missingFor === 'bk') {
        computeAndPushTCResults(xPos, yPos, index);
      } else if (missingFor === 'lt' || missingFor === 'rt') {
        computeAndPushDegResult(xPos, yPos, deg, index);
      }
    }
    
    xPos = 0;
    yPos = 0;
    deg = 0;
    ltDeg = 0;
    rtDeg = 0;
    ltCount = 0;
    rtCount = 0;
    index += 1;
    continue;
  }
  
  const splitLine = line.split(' ').map((value, index) => {
    return index === 1 && value !== '?' ? Number(value) : value;
  });
  
  if (splitLine[1] === '?') {
    missingFor = splitLine[0];
    continue;
  }
  
  let tmpDeg;
  switch (splitLine[0]) {
    case 'lt':
      lastDeg = splitLine[1];
      deg += splitLine[1];
      ltDeg += splitLine[1];
      ltCount += 1;
      deg = deg % 360;
      break;
    case 'rt':
      lastDeg = splitLine[1];
      deg -= Number(splitLine[1]);
      rtDeg += splitLine[1];
      rtCount += 1;
      deg = deg % 360;
      break;
    case 'fd':
      xPos += Math.cos(deg * (PI / 180)) * splitLine[1];
      yPos += Math.sin(deg * (PI / 180)) * splitLine[1];
      break;
    case 'bk':
      tmpDeg = deg;
      tmpDeg = 180 + tmpDeg;
      tmpDeg = tmpDeg % 360;
      xPos += Math.cos(tmpDeg * (PI / 180)) * splitLine[1];
      yPos += Math.sin(tmpDeg * (PI / 180)) * splitLine[1];
      break;
  }
}

if (missingFor === 'fd' || missingFor === 'bk') {
  computeAndPushTCResults(xPos, yPos, index);
} else if (missingFor === 'lt' || missingFor === 'rt') {
  computeAndPushDegResult(xPos, yPos, deg, index);
}

function computeAndPushDegResult(xPos, yPos, deg, index) {
  let result = computeDegrees(xPos, yPos, deg);
  results[index] = result;
}

function computeDegrees(xPos, yPos, deg) {
  let units = computeOffset(xPos, yPos);
  xPos = Math.round(xPos);
  yPos = Math.round(yPos);
  let finalDeg = Math.abs(ltDeg - rtDeg) / Math.abs(ltCount - rtCount);
  return finalDeg;
}

function compute2PointsAngle(crtX, crtY, targetX, targetY) {
  let deg = Math.atan2(targetY - crtY, targetX - crtX) * (180 / Math.PI);
  
  if (deg < 0) {
    deg += 360;
  }
  
  return deg;
}

function computeAndPushTCResults(xPos, yPos, index) {
  results[index] = computeOffset(xPos, yPos);
}

function computeOffset(xPos, yPos) {
  return Math.round(
    Math.sqrt(
      Math.pow(Math.abs(xPos), 2) + Math.pow(Math.abs(yPos), 2)
    )
  );
}

print(results.join('\n'));

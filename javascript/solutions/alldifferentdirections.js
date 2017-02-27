// Problem: https://open.kattis.com/problems/alldifferentdirections

// This post helped:
// https://forums.tigsource.com/index.php?topic=34039.0
const results = [];
// 2 dimensional array - first level keeps the directions sets for each direction
// and the second level keeps each direction for the current set.
const directionsSets = [];

init();

/*
  Reads the input and constructs the directions sets array
*/
function init() {
  let line = readline();
  let index = -1;
  while (line !== '0') {
    // The start of a directions set is a number between 1 and 20, all other lines are > 2
    if (line.length > 2) {
      let initialX = Number(splitWithTail(line, ' ', 1)[0]);
      let initialY = Number(splitWithTail(line, ' ', 2)[1]);
      let directions = splitWithTail(line, ' ', 2)[2];
      
      if (!directionsSets[index]) {
        directionsSets[index] = [];
      }
      directionsSets[index].push(getNewPosition(initialX, initialY, directions));
    } else {
      index += 1;
    }
    
    line = readline();
  }
  
  computeResults();
}

/*
  Goes through each set and each direction for each set, computes the average and then computes the worst directions
*/
function computeResults() {
  directionsSets.forEach((value, setIndex) => {
    let totalX = 0;
    let totalY = 0;
    
    directionsSets[setIndex].forEach((value, directionIndex) => {
      totalX += directionsSets[setIndex][directionIndex].x;
      totalY += directionsSets[setIndex][directionIndex].y;
    });
    
    let averageSetX = totalX / directionsSets[setIndex].length;
    let averageSetY = totalY / directionsSets[setIndex].length;
    let distanceFromAverageToWorstDirection = 0;
    
    directionsSets[setIndex].forEach((value, directionIndex) => {
      let directionX = directionsSets[setIndex][directionIndex].x;
      let directionY = directionsSets[setIndex][directionIndex].y;
      
      let distanceFromAverageToCrtDirection = Math.sqrt(
        Math.pow(directionX - averageSetX, 2) + Math.pow(directionY - averageSetY, 2)
      );
      
      if (distanceFromAverageToCrtDirection > distanceFromAverageToWorstDirection) {
        distanceFromAverageToWorstDirection = distanceFromAverageToCrtDirection;
      }
      
      totalX += directionsSets[setIndex][directionIndex].x;
      totalY += directionsSets[setIndex][directionIndex].y;
    });
    
    results.push([
      Number(averageSetX.toFixed(5)),
      Number(averageSetY.toFixed(5)),
      Number(distanceFromAverageToWorstDirection.toFixed(5))
    ]);
  });
}

/*
  Given the initial x and y coordinates and one set of directions,
  returns the new x and y (after the directions have been followed)
  Directions are a string, something like: "start -45.0 walk 40 turn 40.0 walk 60"
*/
function getNewPosition(initialX, initialY, directions) {
  let directionsArr = directions.split(' ');
  let finalX = initialX;
  let finalY = initialY;
  let crtDegrees = 0;
  
  directionsArr.forEach((value, directionIndex) => {
    if (parseInt(directionIndex, 10) % 2 === 0) {
      switch (value) {
        case 'start':
        case 'turn':
          let degrees = Number(directionsArr[directionIndex + 1]);
          crtDegrees += degrees;
          break;
        case 'walk':
          let units = Number(directionsArr[directionIndex + 1]);
          let newPosition = walk(units, crtDegrees);
          
          finalX += newPosition.xOffset;
          finalY += newPosition.yOffset;
          break;
      }
    }
  });
  
  return {
    x: finalX,
    y: finalY
  };
}

/*
  Given units to walk and degress,
  returns an object containing x and y coordinate of the new position
*/
function walk(units, degrees) {
  /*
    Computing the new position of x and y using the degrees requires some trigonometry.
    Let's say you want to move an object 23 units in a direction of 219 degrees:
    newX += cos(219) * 23;
    newY += sin(219) * 23;
    Javascript's Math.cos and Math.sin require the argument in radians, so we need to convert
  */
  let xOffset = Math.cos(degrees * (Math.PI / 180)) * units;
  let yOffset = Math.sin(degrees * (Math.PI / 180)) * units;
  
  return {
    xOffset: xOffset,
    yOffset: yOffset
  };
}

/*
  Splits a string just like String.prototype.split, but also gets a count argument,
  and will only split the x occurrences (x = count).
  eg. splitWithTail('a b c d', ' ', 2) => ["a", "b", "c d"]
*/
function splitWithTail(str, delim, count) {
  let parts = str.split(delim);
  let tail = parts.slice(count).join(delim);
  let result = parts.slice(0, count);
  result.push(tail);
  return result;
}

print(results.join('\n').replace(/\,/g, ' '));

// Problem: https://open.kattis.com/problems/cups

let result = '';
let line = readline();
let radiuses = [];
const radiusColorMap = {};

while (line = readline()) {
  let splitLine = line.split(' ').map((value, index) => {
    if (!isNaN(parseInt(value, 10))) {
      return index === 0 ? parseInt(value, 10) / 2 : parseInt(value, 10);
    }
    
    return value;
  });
  
  if (typeof(splitLine[0]) === 'number') {
    splitLine.reverse();
  }
  
  radiusColorMap[splitLine[1]] = splitLine[0];
  radiuses.push(splitLine[1]);
}

result = radiuses.sort((a, b) => {
  return a > b;
}).reduce((prevVal, crtVal) => {
  return prevVal + radiusColorMap[crtVal] + '\n';
}, '');

print(result);

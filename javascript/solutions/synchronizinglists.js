// Problem: https://open.kattis.com/problems/synchronizinglists

// VERY messy code ... I'm tired and stubborn to complete this ...
let dataSets = [];
// let nextSet = Number(readline());
let lineIndex = 0;
let arrIndex = -1;
const results = [];

let nextDataSetLineIndex = 0;
while (line = readline()) {
  if (lineIndex === nextDataSetLineIndex) {
    if (line === '0') {
      continue;
    }
    nextDataSetLineIndex = Number(line) * 2 + lineIndex + 1;
    arrIndex += 1;
    dataSets[arrIndex] = [];
  } else {
    dataSets[arrIndex].push(Number(line));
  }
  
  lineIndex += 1;
}

dataSets = dataSets.map((value) => {
  let leftSide = value.splice(0, value.length / 2);
  results.push(sync(leftSide, value));
  results.push('');
  return [leftSide, value];
});

function sync(a, b) {
  const origA = [].concat(a);
  const copyA = [].concat(a);
  const copyB = [].concat(b);
  
  let retVal = [];
  let map = [];

  copyA.sort(sort);
  copyB.sort(sort);

  copyA.forEach((value, index) => {
    map.push([value, copyB[index]]);
  });
  
  map.forEach((value) => {
    retVal[origA.indexOf(value[0])] = value[1];
  });

  return retVal;
}

function sort(x, y) {
  return x > y;
}

print(results.join('\n').replace(/\,/g, '\n'));

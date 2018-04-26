// Problem: https://open.kattis.com/problems/speedlimit

let line;
let indexOfNewSet = 0;
let index = 0;
let result = '';
let dataSet = [];

while ((line = readline())) {
  if (index === indexOfNewSet) {
    // we've reached a data set separator ...
    // compute index of next separator
    indexOfNewSet += parseInt(line) + 1;
    // compute miles in prev data set
    result += dataSet.length > 0 ? computeMiles(dataSet) + ' miles\n' : '';
    dataSet = [];
  } else {
    // data set item, push data to set
    dataSet.push(line);
  }
  index += 1;
}

function computeMiles(dataSet) {
  let sumOfPrevTimeValues = 0;
  let totalMiles = 0;
  dataSet.forEach(value => {
    const sppedAndTime = value.split(' ');
    const speed = parseInt(sppedAndTime[0]);
    const time = parseInt(sppedAndTime[1]) - sumOfPrevTimeValues;
    sumOfPrevTimeValues += time;
    totalMiles += speed * time;
  });
  
  return totalMiles;
}

print(result);

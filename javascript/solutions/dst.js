// Problem: https://open.kattis.com/problems/dst

let line;
let index = 0;
const results = [];

while (line = readline()) {
  if (index === 0) {
    index += 1;
    continue;
  }
  
  let splitLine = line.split(' ');
  
  let ForB = splitLine[0];
  let diff = ForB === 'B' ? 0 - splitLine[1] : splitLine[1];
  let totalMinutes = parseInt(splitLine[2]) * 60 + parseInt(splitLine[3]);
  
  results.push(formatTime(totalMinutes + parseInt(diff)));
  index += 1;
}

// given the number of minutes, it returns the time in hours and minutes separated by space with no leading zeroes
// eg, given 150 it returns '2 30'
function formatTime (totalMinutes) {
  let hours = Math.floor(totalMinutes / 60);
  let minutes = totalMinutes % 60;
  
  if (hours > 23) {
    hours = hours - 24;
  }
  
  if (hours < 0) {
    hours = 24 + hours;
  }
  
  if (minutes < 0) {
    minutes = 60 + minutes;
  }
  
  return hours + ' ' + minutes;
}

print(results.join('\n'));

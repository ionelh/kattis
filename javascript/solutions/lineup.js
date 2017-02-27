// Problem: https://open.kattis.com/problems/lineup

let line;
let originalList = [];
let result = 'NEITHER';

init();
function init() {
  while (line = readline()) {
    if (!isNaN(parseInt(line), 10)) {
      continue;
    }
    
    originalList.push(line);
  }
}

let alphabeticallySorted = [].concat(originalList).sort();
let alphabeticallyReverseSorted = [].concat(originalList).sort().reverse();

if (originalList.join('') === alphabeticallySorted.join('')) {
  result = 'INCREASING';
} else if (originalList.join('') === alphabeticallyReverseSorted.join('')) {
  result = 'DECREASING';
}

print(result);

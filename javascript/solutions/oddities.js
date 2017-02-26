// Problem: https://open.kattis.com/problems/oddities

var length = readline();
var line;
var result = '';

while (line = readline()) {
  result += line + ' is ' + oddOrEven(parseInt(line)) + '\n';
}

function oddOrEven(number) {
  return number % 2 === 0 ? 'even' : 'odd';
}

print(result);

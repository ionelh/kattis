// Problem: https://open.kattis.com/problems/timeloop

var input = parseInt(readline());
var index = 1;
var result = '';

while (index <= input) {
  result += index + ' Abracadabra\n';
  index += 1;
}

print(result);

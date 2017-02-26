// Problem: https://open.kattis.com/problems/modulo

let line;
const resultsArr = [];

while (line = readline()) {
  let result = parseInt(line, 10) % 42;
  if (resultsArr.indexOf(result) === -1) {
    resultsArr.push(result);
  }
}

print(resultsArr.length);

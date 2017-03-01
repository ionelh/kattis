// Problem: https://open.kattis.com/problems/simonsays

const results = [];
let line = readline();
const regEx = /^(Simon says\s)/;

while (line = readline()) {
  if (line.match(regEx)) {
    results.push(line.replace(regEx, ''));
  }
}

print(results.join('\n'));

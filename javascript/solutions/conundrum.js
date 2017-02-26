// Problem: https://open.kattis.com/problems/conundrum

let line = readline();
let result = 0;
const name = 'PER';

for (let i = 0; i < line.length; i += 1) {
  if (line[i] !== name[i % 3]) {
    result += 1;
  }
}

print(result);

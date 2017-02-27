// Problem: https://open.kattis.com/problems/different

let line;
const results = [];

while (line = readline()) {
  const numbers = line.split(' ');
  const firstNo = numbers[0];
  const secondNo = numbers[1];
  results.push(Math.abs(firstNo - secondNo));
}

print(results.join('\n'));

// Problem: https://open.kattis.com/problems/quiteaproblem

let line = readline();
const results = [];

while (typeof(line) === 'string') {
  if (line.match(/problem/i) === null) {
    results.push('no');
  } else {
    results.push('yes');
  }
  line = readline();
}

print(results.join('\n'));

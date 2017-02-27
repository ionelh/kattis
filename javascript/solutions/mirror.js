// Problem: https://open.kattis.com/problems/mirror

let results = [];
let line = readline();

let imageIndex = -1;
while (line = readline()) {
  // only image separators have spaces
  if (line.indexOf(' ') !== -1) {
    imageIndex += 1;
    results[imageIndex] = [];
    continue;
  }
  results[imageIndex].push(line.split('').reverse().join(''));
}

results = results.map((value, index) => {
  value.push('Test ' + (index + 1));
  return value.reverse();
});

print(results.join('\n').replace(/\,/g, '\n'));

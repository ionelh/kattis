// Problem: https://open.kattis.com/problems/everywhere

let results = [];
let line = readline();
readline();

let count = 0;
let tmpArr = [];
while (line = readline()) {
  if (!isNaN(parseInt(line, 10))) {
    results.push(count);
    tmpArr = [];
    count = 0;
  } else {
    if (tmpArr.indexOf(line) === -1) {
      tmpArr.push(line);
      count += 1;
    }
  }
}
results.push(count);

print(results.join('\n'));

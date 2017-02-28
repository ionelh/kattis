// Problem: https://open.kattis.com/problems/detaileddifferences

let results = [];
let line = readline();
let index = 0;

let prevLine;
while (line = readline()) {
  if (index % 2 !== 0) {
    results.push([
      prevLine,
      line,
      line.split('').reduce((acc, value, index) => (
        acc += value === prevLine[index] ? '.' : '*'
      ), ''),
      ''
    ]);
  }
  
  prevLine = line;
  index += 1;
}

print(results.join('\n').replace(/\,/g, '\n'));

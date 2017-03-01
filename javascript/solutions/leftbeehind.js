// Problem: https://open.kattis.com/problems/leftbeehind

let results = [];
let line;

while (line = readline()) {
  if (line === '0 0') {
    continue;
  }
  
  let jars = line.split(' ').map((value) => (Number(value)));
  let sweet = jars[0];
  let sour = jars[1];
  
  if (sweet + sour === 13) {
    results.push(['Never speak again.']);
    continue;
  }
  
  if (sweet === sour) {
    results.push('Undecided.');
  } else if (sweet > sour) {
    results.push('To the convention.');
  } else {
    results.push('Left beehind.');
  }
}

print(results.join('\n'));

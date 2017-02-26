// Problem: https://open.kattis.com/problems/pot

let line;
let index = 0;
let result = 0;

while (line = readline()) {
  if (index === 0) {
    index += 1;
    continue;
  }
  
  let powValue = parseInt(line[line.length - 1], 10);
  let numberValue = line.substring(0, line.length - 1);
  result += Math.pow(numberValue, powValue);
  
  index += 1;
}

print(result);

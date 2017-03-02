// Problem: https://open.kattis.com/problems/erase

let result = 'Deletion succeeded';
let line = readline();
const sweeps = line;
const bits = [];

while (line = readline()) {
  bits.push(line);
}

if (sweeps % 2 === 0) {
  if (bits[0] !== bits[1]) {
    result = 'Deletion failed';
  }
} else {
  const bitsLength = bits[0].length;
  
  for (let index = 0; index < bitsLength; index += 1) {
    if (bits[0][index] === bits[1][index]) {
      result = 'Deletion failed';
      break;
    }
  }
}

print(result);

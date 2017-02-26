// Problem: https://open.kattis.com/problems/reverserot

let line;
const results = [];
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ_.';

while (line = readline()) {
  if (line === '0') {
    continue;
  }
  
  const splitLine = line.split(' ');
  const shiftAmount = parseInt(splitLine[0], 10);
  const message = splitLine[1];
  const messageLength = message.length;
  let result = '';
  
  for (let i = 0; i < messageLength; i += 1) {
    let indexInTheAlphabet = (alphabet + alphabet).indexOf(message[i]);
    result += (alphabet + alphabet).charAt(indexInTheAlphabet + shiftAmount);
  }
  
  results.push(result.split('').reverse().join(''));
}

print(results.join('\n'));

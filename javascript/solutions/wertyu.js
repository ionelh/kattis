// Problem: https://open.kattis.com/problems/wertyu

let line;
const results = [];
const keyboard = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\''],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'],
  [' ']
];

const shiftedKeyboard = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
  ['W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
  ['S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\''],
  ['X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'],
  [' ']
];
const shiftedKeyboardLen = shiftedKeyboard.length;

const shiftedKeyboardCharMap = {
  // it will end up looking something like this:
  // B: {
  //   col: 3,
  //   row: 3
  // },
  // ...
};

for (let rowIndex = 0; rowIndex < shiftedKeyboardLen; rowIndex += 1) {
  const rowLength = shiftedKeyboard[rowIndex].length;
  
  for (let colIndex = 0; colIndex < rowLength; colIndex += 1) {
    shiftedKeyboardCharMap[shiftedKeyboard[rowIndex][colIndex]] = {
      row: rowIndex,
      col: colIndex
    };
  }
}

while (line = readline()) {
  let result = '';
  const lineLength = line.length;
  
  for (let lineCharIndex = 0; lineCharIndex < lineLength; lineCharIndex += 1) {
    const crtChar = line[lineCharIndex];
    result += keyboard[shiftedKeyboardCharMap[crtChar].row][shiftedKeyboardCharMap[crtChar].col];
  }
  results.push(result);
}

print(results.join('\n'));

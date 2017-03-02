// Problem: https://open.kattis.com/problems/chess

// I'm sure there's a more elegant way to solve this ... here's my complicated version, hope it makes sense.
// (It is the fastest JavaScript solution on kattis so far though ;) )

// The bishop always keeps his color. If the target is on a different color => Impossible.
// If the target is on the same color, consider the board rotated 45 degrees, then think about its rows and cols.
// Each row and each col is on the same color. If the target value has the same row OR the same column as the initial position,
// only one move is needed: from the current position to the target position.
// Otherwise, it means 2 moves are needed because the bishop can get to any position on the board with AT MOST 2 moves.
// The intermediary position is fairly easy to determine considering the flipped board - it's the current position's row
// and the target position's column. But that can be outside of the chess board. If it is, it means it's the other way around -
// the current position's column and the target position's row.
let results = [];
let line = readline();
// could have used ASCII codes instead of this as well, like I did in other places ... won't change now ...
const lettersMap = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8
};

// look at a chessboard, flip it 45 degrees and make a row / col matrix
const flippedBoard = {}; // key is cell (eg, E5, B6) and the value is an object with col and row (in the flipped board) as props.
const flippedBoardMap = {}; // key is a string X-Y where X is the row and Y is the col in the flipped board; The value is the cell (eg. A1, B4)

// generate board matrix and color for each cell
const board = [];
for (let row = 8; row >= 1; row -= 1) {
  board[row] = [];
  for (let column = 1; column <= 8; column += 1) {
    if ((row + column) % 2 !== 0) {
      board[row][column] = 'white';
    } else {
      board[row][column] = 'black';
    }
    
    // ASCII code for A, B, C, etc.
    if (!flippedBoard[String.fromCharCode(64 + column) + row]) {
      flippedBoard[String.fromCharCode(64 + column) + row] = {}
    }
    let flippedRow = (9 - row) + column - 1;
    let flippedCol = row + column - 1;
    flippedBoard[String.fromCharCode(64 + column) + row].row = flippedRow;
    flippedBoard[String.fromCharCode(64 + column) + row].col = flippedCol;
    flippedBoardMap[flippedRow + '-' + flippedCol] = String.fromCharCode(64 + column) + row;
  }
}

while (line = readline()) {
  let splitLine = line.split(' ');
  let crtPositionColor = board[lettersMap[splitLine[0]]][splitLine[1]];
  let targetPositionColor = board[lettersMap[splitLine[2]]][splitLine[3]];
  
  // the bishop can only move on its own color, so if the colors are different, it's impossible to move it to the target
  if (crtPositionColor !== targetPositionColor) {
    results.push('Impossible');
    continue;
  }
  
  let crtPosition = splitLine[0] + splitLine[1];
  let targetPosition = splitLine[2] + splitLine[3];
  
  if (crtPosition === targetPosition) {
    results.push('0 ' + crtPosition.split('').join(' '));
    continue;
  }
  
  let targetIsOnTheSameRow = flippedBoard[crtPosition].row === flippedBoard[targetPosition].row;
  let targetIsOnTheSameCol = flippedBoard[crtPosition].col === flippedBoard[targetPosition].col;
  
  if (targetIsOnTheSameRow || targetIsOnTheSameCol) {
    // if target is on the same (flipped) column or the same (flipped) row,
    // one move is enough
    results.push('1 ' + crtPosition.split('').join(' ') + ' ' + targetPosition.split('').join(' '));
  } else {
      // if target is not on the same (flipped) row or on the same (flipped) column,
      // an extra move is needed. Move to the target's column and the crt position's row (or the other way around, if this is outside the board), and then to the target
      let stepPosition = flippedBoard[crtPosition].row + flippedBoard[targetPosition].col + '';
      if (flippedBoardMap[flippedBoard[crtPosition].row + '-' + flippedBoard[targetPosition].col]) {
        stepPosition = flippedBoardMap[flippedBoard[crtPosition].row + '-' + flippedBoard[targetPosition].col];
      } else {
        stepPosition = flippedBoardMap[flippedBoard[targetPosition].row + '-' + flippedBoard[crtPosition].col]
      }
      results.push(
        '2 ' + crtPosition.split('').join(' ') + ' ' + stepPosition.split('').join(' ') + ' ' + targetPosition.split('').join(' ')
      );
  }
}

print(results.join('\n'));

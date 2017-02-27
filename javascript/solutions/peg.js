// Problem: https://open.kattis.com/problems/different

let line;
const board = [];
let result = 0;

init();

function init() {
  while (line = readline()) {
    let lineArr = [];
    line.split('').forEach((cell) => {
      lineArr.push(cell === ' ' ? ' ' : cell);
    });
    board.push(lineArr);
  }
  countLegalMoves(board);
}

function countLegalMoves(board) {
  board.forEach((line, rowNo) => {
    line.forEach((cell, colNo) => {
      // increment if move to right is possible
      result += colNo < line.length - 2 ? incrementMoveForCell(cell + line[colNo + 1] + line[colNo + 2]) : 0;
      // increment if move to left is possible
      result += colNo > 1 ? incrementMoveForCell(cell + line[colNo - 1] + line[colNo - 2]) : 0;
      // increment if move down is possible
      result += rowNo < board.length - 2 ? incrementMoveForCell(cell + board[rowNo + 1][colNo] + board[rowNo + 2][colNo]) : 0;
      // increment if move up is possible
      result += rowNo > 1 ? incrementMoveForCell(cell + board[rowNo - 1][colNo] + board[rowNo - 2][colNo]) : 0;
    });
  });
}

function incrementMoveForCell(grid) {
  return grid === 'oo.' ? 1 : 0;
}

print(result);

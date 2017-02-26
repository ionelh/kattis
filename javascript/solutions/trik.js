// Problem: https://open.kattis.com/problems/trik

var moves = readline();
var movesLength = moves.length;
var index = 0;
var result = 1;
var matrix = {
  A: {
    1: 2,
    2: 1,
    3: 3
  },
  B: {
    1: 1,
    2: 3,
    3: 2
  },
  C: {
    1: 3,
    2: 2,
    3: 1
  }
};

while (index < movesLength) {
  result = computeNewPosition(moves[index], result);
  index++;
}

function computeNewPosition(move, oldPosition) {
  return matrix[move][oldPosition];
}

print(result);

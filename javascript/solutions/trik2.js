// Problem: https://open.kattis.com/problems/trik

var inputMoves = readline(); // the input moves
var inputMovesLength = inputMoves.length; // number of moves
var index = 0; // index of current move
var cups = [1, 0, 0]; // the cups (the cup with value 1 has the ball)
var moves = {
  'A': [0, 1], // move A swaps cup 1 with cup 2
  'B': [1, 2], // move B swaps cup 2 with cup 3
  'C': [0, 2], // move C swaps cup 1 with cup 3
};

while (index < inputMovesLength) {
  cups = swap(inputMoves[index], cups);
  index++;
}

function swap(move, currentCups) {
  // mutating the cups would be more efficient I think, but mutation and functions with side effects are the root of all evil, right?
  var cupsCopy = [].concat(currentCups);
  
  cupsCopy[moves[move][0]] = currentCups[moves[move][1]];
  cupsCopy[moves[move][1]] = currentCups[moves[move][0]];
  
  return cupsCopy;
}

print(cups.indexOf(1) + 1);

// Problem: https://open.kattis.com/problems/bijele

// piece types: king, queen, rooks, bishops, knights, pawns
// king is index 0, queen is 1 and so on
var expectedNoOfPiecesPerPieceType = [1, 1, 2, 2, 2, 8];

var result = readline().split(' ').map((item, index) => (
  expectedNoOfPiecesPerPieceType[index] - parseInt(item)
));

print(result.join(' '));

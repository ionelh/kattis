// Problem: https://open.kattis.com/problems/dicecup

let line = readline().split(' ');
let results = [];
const N = parseInt(line[0], 10);
const M = parseInt(line[1], 10);
let dice = [N, M];
dice.sort((a, b) => {
  return a - b;
});

// the sums(s) with the highest probabilities are the numbers between
//  A + 1 and B + 1
//  where A is the number of faces of the die with a smaller number of faces
//  and B is the number of faces of the die with a higher number of faces
for (let i = dice[0] + 1; i <= dice[1] + 1; i += 1) {
  results.push(i);
}

print(results.join('\n'));

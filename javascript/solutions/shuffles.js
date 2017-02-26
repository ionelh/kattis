// Problem: https://open.kattis.com/problems/wordsfornumbers

const noOfCards = parseInt(readline(), 10);
const targetOrder = readline().split(' ').map((value) => {
  return parseInt(value, 10);
});

let count = 1;
let power = 0;

let a = new Array(noOfCards).map((value, index) => {
  return 0;
});

for (let i = 0; i < noOfCards; i += 1) {
  a[targetOrder[i] - 1] = i;
}

for (let j = 1; j < noOfCards; j += 1) {
  if (a[j - 1] > a[j]) {
    count += 1;
  }
}

// Reminder of what a logarithm is: Math.log2(x) = y <=> y = Math.pow(2, x);
// eg. Math.log2(8) = 3 because 2^3 = 8
// while (power < Math.log2(count)) {
while ((1 << power) < count) {
  power += 1;
}

print(power + '');

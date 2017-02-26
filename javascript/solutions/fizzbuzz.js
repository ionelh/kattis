// Problem: https://open.kattis.com/problems/fizzbuzz

let line = readline().split(' ');
let X = line[0];
let Y = line[1];
let N = line[2];
let results = [];

for (let i = 1; i <= N; i += 1) {
  if (isNumberDivisibleBy(i, X) && isNumberDivisibleBy(i, Y)) {
    results.push('FizzBuzz');
  } else if (isNumberDivisibleBy(i, X)) {
    results.push('Fizz');
  } else if (isNumberDivisibleBy(i, Y)) {
    results.push('Buzz');
  } else {
    results.push(i);
  }
}

function isNumberDivisibleBy(number, divider) {
  return number % divider === 0;
}

print(results.join('\n'));

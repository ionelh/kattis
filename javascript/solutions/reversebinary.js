// Problem: https://open.kattis.com/problems/reversebinary

const inputNumber = parseInt(readline(), 10);
const reversedBinary = (inputNumber).toString(2).split('').reverse().join('');

print(parseInt(reversedBinary, 2));

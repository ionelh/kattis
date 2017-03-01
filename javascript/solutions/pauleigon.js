// Problem: https://open.kattis.com/problems/pauleigon

let result = '';
let line = readline().split(' ');
let scoreSum = Number(line[1]) + Number(line[2]);

result += (Math.floor((scoreSum / Number(line[0]))) % 2) === 0 ? 'paul' : 'opponent';

print(result);

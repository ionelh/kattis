// Problem: https://open.kattis.com/problems/sibice

const inputData = readline().split(' ');
const diagonal = Math.sqrt(Math.pow(parseInt(inputData[1], 10), 2) + Math.pow(parseInt(inputData[2], 10), 2));
let line;

while (line = readline()) {
  parseInt(line, 10) <= diagonal ? print('DA') : print('NE');
}

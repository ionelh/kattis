// Problem: https://open.kattis.com/problems/twostones

const input = parseInt(readline());
let winner = input % 2 === 0 ? 'Bob' : 'Alice';
      
print(winner);

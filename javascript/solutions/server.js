// Problem: https://open.kattis.com/problems/server

const maxMins = readline().split(' ')[1];
const tasks = readline().split(' ');
let totalTaskMins = 0;
let result = 0;

tasks.forEach((value) => {
  totalTaskMins += Number(value);
  if (totalTaskMins <= maxMins) {
    result += 1;
  }
});

print(result);

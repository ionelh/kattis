// Problem: https://open.kattis.com/problems/parking

const prices = readline().split(' ').map((value) => (Number(value)));
const schedule = [];
let lowestArrivalMin;
let highestDepartueMin;
let line;
let result = 0;

while (line = readline()) {
  schedule.push(line.split(' ').map((value, index) => {
    let valueNo = Number(value);
    if (index === 0 && (!lowestArrivalMin || lowestArrivalMin > valueNo)) {
      lowestArrivalMin = valueNo;
    }
    
    if (index === 1 && (!highestDepartueMin || highestDepartueMin < valueNo)) {
      highestDepartueMin = valueNo;
    }
    
    return valueNo;
  }));
}

for (let i = lowestArrivalMin; i < highestDepartueMin; i += 1) {
  let trucksParkedThisMin = 0;
  let priceForCrtMin = 0;
  
  for (let j = 0; j < schedule.length; j += 1) {
    trucksParkedThisMin += i >= schedule[j][0] && i < schedule[j][1] ? 1 : 0;
  }
  
  priceForCrtMin = trucksParkedThisMin !== 0 ? trucksParkedThisMin * prices[trucksParkedThisMin - 1] : 0;
  
  result += priceForCrtMin;
}

print(result);

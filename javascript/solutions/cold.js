// Problem: https://open.kattis.com/problems/cold

var collectedTemperaturesCount = parseInt(readline());
var collectedTemperatures = readline().split(' ');
var subZeroTemperaturesCount = 0;

collectedTemperatures.forEach((item) => {
  if (parseInt(item) < 0) {
    subZeroTemperaturesCount += 1;
  }
});

print(subZeroTemperaturesCount);

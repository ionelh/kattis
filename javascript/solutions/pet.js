// Problem: https://open.kattis.com/problems/pet

let line;
let crtContestantIndex = 0;
let highestScore = 0;
let winnerIndex = 0;

while (line = readline()) {
  let gradesArr = line.split(' ');
  
  let crtScore = gradesArr.reduce((prevVal, crtVal) => (
    prevVal += parseInt(crtVal, 10)
  ), 0);
  
  crtContestantIndex += 1;
  
  if (crtScore > highestScore) {
    highestScore = crtScore;
    winnerIndex = crtContestantIndex;
  }
}

print(winnerIndex + ' ' + highestScore);

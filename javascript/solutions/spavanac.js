// Problem: https://open.kattis.com/problems/spavanac

const minsSetBack = 45;
const minsSetBackToOneHourDiff = 60 - minsSetBack;
const line = readline();
const inputHours = parseInt(line.split(' ')[0]);
const inputMinutes = parseInt(line.split(' ')[1]);

let hoursOffset = 0;
let minutesOffset = -45;
let outputHours;
let outputMinutes;

if (inputMinutes < 45) {
  minutesOffset = minsSetBackToOneHourDiff;
  if (inputHours === 0) {
    hoursOffset = 23;
  } else {
    hoursOffset = -1;
  }
}

outputHours = inputHours + hoursOffset;
outputMinutes = inputMinutes + minutesOffset;

print(outputHours + ' ' + outputMinutes);

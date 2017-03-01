// Problem: https://open.kattis.com/problems/savingdaylight

let results = [];
let line;

while (line = readline()) {
  let split = splitWithTail(line, ' ', 3);
  const sunriseSunset = split[3].split(' ');
  split.pop();
  results.push(
    split.join(' ') + ' ' +
    minutesToString(
      computeTimeDiff(
        sunriseSunset[0], sunriseSunset[1]
      )
    )
  );
}

// gets a number like 79 and outputs the hours and minutes like: 1 hours 19 minutes
function minutesToString(minutes) {
  return Math.floor(minutes / 60) + ' hours ' + (minutes % 60) + ' minutes';
}

// computes the difference in minutes between sunrise and sunset
function computeTimeDiff(sunrise, sunset) {
  return getTotalMinutes(sunset) - getTotalMinutes(sunrise);
}

// gets a string like hh:mm and returns the total number of minutes
function getTotalMinutes(time) {
  return time.split(':').map((value, index) => {
    let multiplier = index === 0 ? 60 : 1;
    return parseInt(value, 10) * multiplier;
  }).reduce((prevVal, crtVal) => {
    return prevVal += crtVal
  }, 0);
}

/*
  Splits a string just like String.prototype.split, but also gets a count argument,
  and will only split the x occurrences (x = count).
  eg. splitWithTail('a b c d', ' ', 2) => ["a", "b", "c d"]
*/
function splitWithTail(str, delim, count) {
  let parts = str.split(delim);
  let tail = parts.slice(count).join(delim);
  let result = parts.slice(0, count);
  result.push(tail);
  return result;
}

print(results.join('\n'));

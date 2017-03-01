// Problem: https://open.kattis.com/problems/quickbrownfox

let results = [];
let line = readline();
const map = {};
let missing = 'abcdefghijklmnopqrstuvwxyz';

// ascii codes for characters a - z are 97 - 122
for (let i = 97; i <= 122; i += 1) {
  let char = String.fromCharCode(i);
  map[char] = char;
}

while (line = readline()) {
  line.split('').forEach((value) => {
    let letterLC = value.toLowerCase();
    // I'm using a map instead of a list and .indexOf() because it's faster
    if (map[letterLC]) {
      missing = missing.replace(letterLC, '');
    }
  });
          
  results.push(missing.length === 0 ? 'pangram' : 'missing ' + missing);
  missing = 'abcdefghijklmnopqrstuvwxyz';
}

print(results.join('\n'));

// Problem: https://open.kattis.com/problems/simonsays

const results = [];
let line = readline();

// even though this is accepted by Kattis and is faster than the other version, it doesn't seem correct because
// it will replace 'Simon says ' everywhere, while the problem says it should only be replaced at the beginning of the string.
while (line = readline()) {
  if (line.startsWith('Simon says ')) {
    results.push(line.replace('Simon says ', ''));
  }
}

print(results.join('\n'));

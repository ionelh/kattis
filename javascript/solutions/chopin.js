// Problem: https://open.kattis.com/problems/chopin

let results = [];
let line;
const UNIQUE = 'UNIQUE';
const map = {
  'A': UNIQUE,
  'A#': 'Bb',
  'Bb': 'A#',
  'B': UNIQUE,
  'C': UNIQUE,
  'C#': 'Db',
  'Db': 'C#',
  'D': UNIQUE,
  'D#': 'Eb',
  'Eb': 'D#',
  'E': UNIQUE,
  'F': UNIQUE,
  'F#': 'Gb',
  'Gb': 'F#',
  'G': UNIQUE,
  'G#': 'Ab',
  'Ab': 'G#'
};

let index = 1;
while (line = readline()) {
  const caseNo = 'Case ' + index + ': ';
  const splitLine = line.split(' ');
  const suffix = map[splitLine[0]] === UNIQUE ? '' : ' ' + splitLine[1];
  results.push(caseNo + map[splitLine[0]] + suffix);
  index += 1;
}

print(results.join('\n'));

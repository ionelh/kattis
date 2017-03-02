// Problem: https://open.kattis.com/problems/wertyu

// Another approach to the wertyu problem ...
let line;
const results = [];
// we map each "wrong" character to the correct one
const map = {
  '1': '`', '2': '1', '3': '2', '4': '3', '5': '4', '6': '5', '7': '6', '8': '7', '9': '8', '0': '9', '-': '0', '=': '-',
  'W': 'Q', 'E': 'W', 'R': 'E', 'T': 'R', 'Y': 'T', 'U': 'Y', 'I': 'U', 'O': 'I', 'P': 'O', '[': 'P', ']': '[', '\\': ']',
  'S': 'A', 'D': 'S', 'F': 'D', 'G': 'F', 'H': 'G', 'J': 'H', 'K': 'J', 'L': 'K', ';': 'L', '\'': ';',
  'X': 'Z', 'C': 'X', 'V': 'C', 'B': 'V', 'N': 'B', 'M': 'N', ',': 'M', '.': ',', '/': '.',
  ' ': ' '
};

while (line = readline()) {
  let result = '';
  const lineLength = line.length;
  
  for (let lineCharIndex = 0; lineCharIndex < lineLength; lineCharIndex += 1) {
    const crtChar = line[lineCharIndex];
    result += map[crtChar];
  }
  results.push(result);
}

print(results.join('\n'));

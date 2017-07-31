// Problem: https://open.kattis.com/problems/bing

readline();
const dict = {};
while (line = readline()) {
  line = line.trim();
  print(!dict[line] ? '0' : dict[line]);
  let lineLength = line.length;
  let substr = '';
  for (let i = 0; i < line.length; i += 1) {
    let crtChar = line[i];
    substr += crtChar;
    if (!dict[substr]) {
      dict[substr] = 1;
    } else {
      dict[substr] += 1;
    }
  }
}

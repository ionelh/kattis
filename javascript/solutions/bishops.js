// Problem: https://open.kattis.com/problems/bishops

let line;

while (line = readline()) {
  n = parseInt(line);
  if (line == 1) {
    print('1');
  } else {
    print(2 * n - 2)
  }
}

# Problem: https://open.kattis.com/problems/bishops

import sys
# Cmd + D to print the results in the console

for line in sys.stdin.readlines():
  n = int(line)
  if n == 1:
    print('1')
  else:
    print(2 * n - 2)

# Problem: https://open.kattis.com/problems/bing

import sys
# Cmd + D to print the results in the console

lines = sys.stdin.readlines()
lines.pop(0)

dict = {}

for line in lines:
  line = line.rstrip()

  print(0 if line not in dict else dict[line])

  substr = ''
  for char in line:
    substr += char
    dict[substr] = 1 if substr not in dict else dict[substr] + 1

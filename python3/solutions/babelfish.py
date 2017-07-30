# Problem: https://open.kattis.com/problems/babelfish

import sys
# Cmd + D to print the results in the console

dict = {}
reached_blank_line = False

for line in sys.stdin.readlines():
  if line == '\n':
    reached_blank_line = True
    continue

  if reached_blank_line is False:
    split_line = line.split()
    dict[split_line[1]] = split_line[0]
    continue

  stripped_line = line.strip()
  print(dict[stripped_line] if stripped_line in dict else 'eh')



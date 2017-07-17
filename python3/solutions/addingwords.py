# Problem: https://open.kattis.com/problems/addingwords

vars = {}
values = {}

import sys
# Cmd + D to print the results in the console
for line in sys.stdin.readlines():
  split_line = line.split()
  if split_line[0] == 'def':
    var_name = split_line[1]
    var_value = int(split_line[2])

    if var_name in vars:
      del values[vars[var_name]]

    vars[var_name] = var_value
    values[var_value] = var_name
  elif split_line[0] == 'clear':
    vars = {}
    values = {}
  elif split_line[0] == 'calc':
    total = 0

    instruction = ' '.join(split_line[1:])
    split_line = split_line[:-1]
    split_line[0] = '+'
    for token in range(0, len(split_line), 2):
      var_name = split_line[token + 1]
      operator = split_line[token]
      if var_name not in vars:
        total = ''
        break

      if operator == '+':
        total += vars[var_name]
      else:
        total -= vars[var_name]

    print(instruction, values.get(total, 'unknown'))

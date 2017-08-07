# Problem: https://open.kattis.com/problems/bitbybit

import sys
# Cmd + D to print the results in the console

while True:
  line = input().rstrip()
  if line == '0':
    break

  if line.isdigit() is True:
    total_instructions = int(line) + 1
    register = ['?'] * 32
    while total_instructions > 1:
      instruction = input().split()
      i = int(instruction[1])
      total_instructions -= 1
      if instruction[0] == 'SET':
        register[31 - i] = '1'
        continue

      if instruction[0] == 'CLEAR':
        register[31 - i] = '0'
        continue

      if instruction[0] == 'AND':
        j = int(instruction[2])
        if register[31 - i] == '?' and register[31 - j] == '?':
          register[31 - i] = '?'
        elif register[31 - i] == '?' or register[31 - j] == '?':
          register[31 - i] = '0' if register[31 - i] == '0' or register[31 - j] == '0' else '?'
        else:
          register[31 - i] = '1' if register[31 - i] == '1' and register[31 - j] == '1' else '0'
        continue

      if instruction[0] == 'OR':
        j = int(instruction[2])
        if register[31 - i] == '?' and register[31 - j] == '?':
          register[31 - i] = '?'
        elif register[31 - i] == '?' or register[31 - j] == '?':
          register[31 - i] = '1' if register[31 - i] == '1' or register[31 - j] == '1' else '?'
        else:
          register[31 - i] = '1' if register[31 - i] == '1' or register[31 - j] == '1' else '0'
        continue

    print(''.join(register))

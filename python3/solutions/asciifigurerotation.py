# Problem: https://open.kattis.com/problems/asciifigurerotation

import sys
# Cmd + D to print the results in the console

def swap_chars(s, char1, char2):
  # we know we'll never have 'a' in the string
  tmp = s.replace(char1, 'a')
  tmp = tmp.replace(char2, char1)
  return tmp.replace('a', char2)

def rotate_90_deg_cw(original):
  return list(zip(*original[::-1]))

is_first_line = True
while True:
  line = input()

  if line == '0':
    break

  if line.isdigit() is True:
    if is_first_line is True:
      is_first_line = False
    else:
      print('')
    i = int(line)
    largest_line = 0
    matrix = []
    while i > 0:
      line_as_list = list(input())
      matrix.append(line_as_list)
      if len(line_as_list) > largest_line:
        largest_line = len(line_as_list)
      i -= 1

    for line in matrix:
      line += [' '] * (largest_line - len(line))

    matrix = rotate_90_deg_cw(matrix)
    for line in matrix:
      print(swap_chars(''.join(line).rstrip(), '-', '|'))

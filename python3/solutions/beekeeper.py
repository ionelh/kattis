# Problem: https://open.kattis.com/problems/beekeeper

import sys
# Cmd + D to print the results in the console

import re

p = re.compile("([aeiouy])(\\1)", re.I)

lines = sys.stdin.readlines()
lines[len(lines) - 1] = '0'

i = 0
remember = None

# yuck ... I'm tired
while True:
  line = lines[i]

  if line == '0':
    print(remember)
    break

  line = line.strip()

  if line.isdigit() is True:
    if remember is not None:
      print(remember)

    if remember == '':
      print(lines[i - 1].strip())

    remember = ''
    i += 1
    continue

  if len(p.findall(line)) > len(p.findall(remember)):
    remember = line
  i += 1

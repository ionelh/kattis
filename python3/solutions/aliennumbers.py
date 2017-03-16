# Problem: https://open.kattis.com/problems/aliennumbers

########## GENERATE TEST CASES LOCALLY ##########
dummy_input = [
  '4',
  '9 0123456789 oF8',
  'Foo oF8 0123456789',
  '13 0123456789abcdef 01',
  'CODE O!CDE? A?JM!.',
]


def input():
  if len(dummy_input) != 0:
    return dummy_input.pop(0)
  raise EOFError()

################## CODE #####################

# The algorithms:
# dec system to whatever system: http://interactivepython.org/courselib/static/pythonds/BasicDS/ConvertingDecimalNumberstoBinaryNumbers.html
# whatever system to decimal: https://www.wisc-online.com/learn/general-education/technical-math/tmh6207/an-algorithm-for-converting-a-hexadecimal-num

import math

def convert_decimal_number_to_system_number(dec_number, system):
  base = len(system)
  stack = []
  system_number = ''

  while dec_number > 0:
    remainder = dec_number % base
    stack = [remainder] + stack
    dec_number //= base

  for elm in stack:
    system_number += system[elm]

  return system_number

def convert_number_from_source_to_target(system_number, source_system, target_system):
  source_system_base = len(source_system)
  dec_digits = list(range(source_system_base))
  dec_number = 0

  for i in range(len(system_number)):
    decimal_digit = dec_digits[source_system.index(system_number[i])]
    dec_number += decimal_digit * math.pow(source_system_base, len(system_number) - i - 1)

  return convert_decimal_number_to_system_number(int(dec_number), target_system)

nc = int(input())
tc = 0
while tc < nc:
  line = input()
  line_split = line.split(' ')
  result = convert_number_from_source_to_target(line_split[0], line_split[1], line_split[2])
  print('Case #{0}: {1}'.format(tc + 1, result))
  tc += 1

# Problem: https://open.kattis.com/problems/encodedmessage

########## GENERATE TEST CASES LOCALLY ##########

dummy_input = [
  '3',
  'RSTEEOTCP',
  'eedARBtVrolsiesuAoReerles',
  'EarSvyeqeBsuneMa'
]

def input():
  if len(dummy_input) != 0:
    return dummy_input.pop(0)
  raise EOFError()

################## CODE #####################

import math

line = input()
result = ''

def decode(encoded):
  decoded = ''
  length = len(encoded)
  square_root = int(math.sqrt(length))
  for i in range(square_root):
    for j in range(square_root):
      char_index = (square_root * (j + 1) - i)
      decoded += encoded[char_index - 1]

  return decoded

while True:
  try:
    line = input()
    result += decode(line) + '\n'
  except EOFError:
    break

print(result)

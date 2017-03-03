# Problem: https://open.kattis.com/problems/different

########## GENERATE TEST CASES LOCALLY ##########

dummy_input = [
  '10 12',
  '71293781758123 72784',
  '1 12345677654321'
]

def input():
  return dummy_input.pop(0)

################## CODE #####################

import sys

for i in sys.stdin:
  ab = i.split()
  a = int(ab[0])
  b = int(ab[1])
  print(abs(a - b))
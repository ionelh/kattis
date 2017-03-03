# Problem: https://open.kattis.com/problems/soylent

########## GENERATE TEST CASES LOCALLY ##########

dummy_input = [
  '2',
  '2000',
  '1600'
]

def input():
  return dummy_input.pop(0)

################## CODE #####################

import math

line = input()
no_of_test_cases = int(line)
crt_test_case = 1
result = ''

while crt_test_case <= no_of_test_cases:
  line = input()
  result += str(math.ceil(int(line) / 400)) + '\n'
  crt_test_case += 1

print(result)

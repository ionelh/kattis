# Problem: https://open.kattis.com/problems/areal

########## GENERATE TEST CASES LOCALLY ##########

dummy_input = [
  '5'
]

def input():
  return dummy_input.pop(0)

################## CODE #####################

import math

area = int(input())

print(math.sqrt(area) * 4)
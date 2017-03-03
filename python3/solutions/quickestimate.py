# Problem: https://open.kattis.com/problems/quickestimate

########## GENERATE TEST CASES LOCALLY ##########

dummy_input = [
  '5',
  '314',
  '1',
  '5926',
  '5',
  '35897'
]

def input():
  return dummy_input.pop(0)

################## CODE #####################

num_tc = int(input())

while num_tc > 0:
  print(len(input()))
  num_tc -= 1
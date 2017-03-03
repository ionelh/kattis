# Problem: https://open.kattis.com/problems/oddities

########## GENERATE TEST CASES LOCALLY ##########

dummy_input = [
  '3',
  '10',
  '9',
  '-5'
]

def input():
  return dummy_input.pop(0)

################## CODE #####################

num_tc = int(input())

while num_tc > 0:
  number = input()
  print(number + ' is even' if int(number) % 2 == 0 else number + ' is odd')
  num_tc -= 1
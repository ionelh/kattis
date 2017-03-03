# Problem: https://open.kattis.com/problems/twostones

########## GENERATE TEST CASES LOCALLY ##########

dummy_input = [
  '2'
]

def input():
  return dummy_input.pop(0)

################## CODE #####################

num_stones = int(input())

if num_stones % 2 == 0:
  print('Bob')
else:
  print('Alice')
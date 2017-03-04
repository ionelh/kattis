# Problem: https://open.kattis.com/problems/skocimis

########## GENERATE TEST CASES LOCALLY ##########

dummy_input = [
  # '2 3 5',
  '3 5 9'
]

def input():
  if len(dummy_input) != 0:
    return dummy_input.pop(0)
  raise EOFError()

################## CODE #####################

kangaroos = [int(elt) for elt in input().split(' ')]

result = kangaroos[1] - kangaroos[0]
if kangaroos[2] - kangaroos[1] > result:
  result = kangaroos[2] - kangaroos[1]

print(result - 1)

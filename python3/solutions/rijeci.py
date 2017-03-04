# Problem: https://open.kattis.com/problems/rijeci

########## GENERATE TEST CASES LOCALLY ##########

dummy_input = [
  '2'
]

def input():
  if len(dummy_input) != 0:
    return dummy_input.pop(0)
  raise EOFError()

################## CODE #####################

# The results are always 2 consecutive numbers in the fibonacci sequence ... look more into this

K = int(input())

if K == 1:
  print('0 1')

if K == 2:
  print('1 1')

if K > 2:
  a_s = 1
  b_s = 1
  for i in range(K - 2):
    prev_a_s = a_s
    a_s = b_s
    b_s += prev_a_s

  print('{0} {1}'.format(a_s, b_s))
# Problem: https://open.kattis.com/problems/rijeci

########## GENERATE TEST CASES LOCALLY ##########

dummy_input = [
  '10'
]

def input():
  if len(dummy_input) != 0:
    return dummy_input.pop(0)
  raise EOFError()

################## CODE #####################

# The results are always 2 consecutive numbers in the fibonacci sequence

K = int(input())

fibonacci = [0, 1]
index = 2
while index <= K:
  fibonacci.append(fibonacci[-1] + fibonacci[-2])
  index += 1

print('{0} {1}'.format(fibonacci[-2], fibonacci[-1]))

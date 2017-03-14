# Problem: https://open.kattis.com/problems/cetiri

########## GENERATE TEST CASES LOCALLY ##########
dummy_input = [
  '4 6 8',
  # '10 1 4',
  # '11 1 -4',
  # '16 6 1',
  # '-2 4 7',
  # '-10 -4 -1',
]


def input():
  if len(dummy_input) != 0:
    return dummy_input.pop(0)
  raise EOFError()

################## CODE #####################

numbers = sorted([int(number) for number in input().split(' ')])

if numbers[2] - numbers[1] == numbers[1] - numbers[0]:
  print(numbers[2] + (numbers[2] - numbers[1]))
else:
  greatest_diff = numbers[2] - numbers[1]
  missing_no = numbers[1] + (numbers[1] - numbers[0])
  if numbers[1] - numbers[0] > greatest_diff:
    missing_no = numbers[0] + (numbers[2] - numbers[1])
  print(missing_no)

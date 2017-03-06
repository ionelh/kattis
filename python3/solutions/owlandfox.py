# Problem: https://open.kattis.com/problems/owlandfox

########## GENERATE TEST CASES LOCALLY ##########

dummy_input = [
  '4',
  '30',
  '199',
  '1000',
  '1520',
  '4000',
  '22223',
  '50000',
  '152000',
  '1100'
]

def input():
  if len(dummy_input) != 0:
    return dummy_input.pop(0)
  raise EOFError()

################## CODE #####################

def get_result(number):
  demanded_number = int(number)

  if demanded_number % 10 != 0:
    return demanded_number - 1

  if demanded_number % 100000 == 0:
    return demanded_number - 100000

  if demanded_number % 10000 == 0:
    return demanded_number - 10000

  if demanded_number % 1000 == 0:
    return demanded_number - 1000

  if demanded_number % 100 == 0:
    return demanded_number - 100

  if demanded_number % 10 == 0:
    return demanded_number - 10

  return demanded_number - 1

line = input()

while True:
  try:
    line = input()
    print(get_result(line))
  except EOFError:
    break

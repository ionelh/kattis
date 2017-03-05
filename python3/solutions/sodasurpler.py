# Problem: https://open.kattis.com/problems/sodasurpler

########## GENERATE TEST CASES LOCALLY ##########

dummy_input = [
  # '9 0 3'
  '5 5 2'
]

def input():
  if len(dummy_input) != 0:
    return dummy_input.pop(0)
  raise EOFError()

################## CODE #####################

data = [int(elt) for elt in input().split(' ')]
tim_s_bottles = data[0] + data[1]
cost_of_soda = data[2]
how_many = 0

while tim_s_bottles >= cost_of_soda:
  modulo = tim_s_bottles % cost_of_soda
  how_many += int((tim_s_bottles - modulo) / cost_of_soda)
  tim_s_bottles = modulo + int((tim_s_bottles - modulo) / cost_of_soda)

print(how_many)

# Problem: https://open.kattis.com/problems/secretmessage

########## GENERATE TEST CASES LOCALLY ##########

dummy_input = [
  '3',
  'iloveyouJack',
  'iloveyoutooJill',
  'TheContestisOver'
]

def input():
  return dummy_input.pop(0)

################## CODE #####################

import math

# there must be an easier way to do this ...

line = input()
no_of_test_cases = int(line)
crt_test_case = 1
result = ''

def get_smallest_square_number(number):
  square_root = math.ceil(math.sqrt(number))
  # this should be faster than using math.pow() and calling int() on that ...
  return square_root * square_root

def add_asterisks_to_string(string, asterisks_no):
  ret_val = string + '*' * asterisks_no
  return ret_val

# This function is a bit hard to read, because I am generating the table, rotate it and get the correct character on the fly,
# in the same iteration
# Having a function to generate the table, another one to rotate and return the correct chars would have implied more iteration,
# and hence slower execution, but would have been more readable
def get_secret_message(string):
  ret_val = ''
  str_len = len(string)
  square_root = int(math.sqrt(str_len))
  for row_index in range(square_root):
    for col_index in range(square_root):
      char = string[str_len - square_root * (col_index + 1) + row_index]
      if char != '*':
        ret_val += char

  return ret_val


while crt_test_case <= no_of_test_cases:
  line = input()
  L = int(len(line))
  M = get_smallest_square_number(L)
  string_with_asterisks = add_asterisks_to_string(line, M - L)
  result += get_secret_message(string_with_asterisks) + '\n'
  crt_test_case += 1

print(result)
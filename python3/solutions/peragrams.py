# Problem: https://open.kattis.com/problems/peragrams

########## GENERATE TEST CASES LOCALLY ##########

dummy_input = [
  'abc'
]

def input():
  return dummy_input.pop(0)

################## CODE #####################

# IN PROGRESS!!!!

line = input()

def is_palindrome(str):
  return str[::-1] == str

# returns all possible compinations of letters
def get_all_variations(str):
  i = 0
  variation = ''
  while variation != str:
    if variation == '':
      variation = str
    # 'abcd'[:1] -> a
    # 'abcd'[::-1]) -> dcba
    # 'abcd'[1:1 + 2] -> bc
    # 'abcd'[1:1 + 2][::-1] -> cb
    # 'abcd'[1 + 2:] -> d
    variation = variation[:i] + variation[i:i + 2][::-1] + variation[i + 2:]
    print(variation)
    i += 1
    if i == len(str) - 1:
      i = 0

get_all_variations('abc')

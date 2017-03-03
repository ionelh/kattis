# Problem: https://open.kattis.com/problems/kemija08

########## GENERATE TEST CASES LOCALLY ##########

dummy_input = [
  'zepelepenapa papapripikapa'
]

def input():
  return dummy_input.pop(0)

################## CODE #####################

import re

# see https://docs.python.org/3/howto/regex.html
# see https://docs.python.org/2/library/re.html

line = input()
pattern = re.compile('([aeiou]p[aeiou])')

def replace(arg):
  match = arg.group()
  if match[0] == match[2]:
    return match[0]
  else:
    return match

print(re.sub(pattern, replace, line))

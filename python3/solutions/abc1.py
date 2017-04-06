# Problem: https://open.kattis.com/problems/abc

########## GENERATE TEST CASES LOCALLY ##########
dummy_input = [
  '1 5 3',
  'ABC'
]


def input():
  if len(dummy_input) != 0:
    return dummy_input.pop(0)
  raise EOFError()

################## CODE #####################

# TODO Use a custom compare method to sort (less iterations)

asc_sorting = 'ABC'
sort_map = {}
numbers = sorted([int(elm) for elm in input().split(' ')])
for i in range(len(asc_sorting)):
  sort_map[asc_sorting[i]] = numbers[i]

sorting = input()

results = [None] * 3
for i in range(len(sorting)):
  results[i] = str(sort_map[sorting[i]])

print(' '.join(results))

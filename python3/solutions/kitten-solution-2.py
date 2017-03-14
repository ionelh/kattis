# Problem: https://open.kattis.com/problems/kitten

########## GENERATE TEST CASES LOCALLY ##########
dummy_input = [
  '14',
  '25 24',
  '4 3 1 2',
  '13 9 4 11',
  '10 20 8 7',
  '32 10 21',
  '23 13 19 32 22',
  '19 12 5 14 17 30',
  '14 6 15 16',
  '30 18 31 29',
  '24 23 26',
  '26 27 28',
  '-1',

  # '14',
  # '25 24',
  # '4 3 1 2',
  # '13 9 4 11',
  # '10 20 8 7',
  # '32 10 21',
  # '23 13 19 32 22',
  # '14 6 15 16',
  # '19 12 5 14 17 30',
  # '30 18 31 29',
  # '24 23 26',
  # '26 27 28',
  # '-1',
]


def input():
  if len(dummy_input) != 0:
    return dummy_input.pop(0)
  raise EOFError()

################## CODE #####################

# Slightly different approach, but use a map to store the root of every position

def get_path(crt_root, roots, accumulator = ''):
  if accumulator == '':
    accumulator = crt_root

  if crt_root in roots_map:
    return get_path(roots_map[crt_root], roots, '{0} {1}'.format(accumulator, roots_map[crt_root]))

  return accumulator

line = input()
kitten_position = line

# key is a position that is not a root and value is its root
roots_map = {}
line = input()
while line != '-1':
  crt_branch = line.split(' ')
  for position in crt_branch[1:]:
    roots_map[position] = crt_branch[0]
  line = input()

print(get_path(kitten_position, roots_map))

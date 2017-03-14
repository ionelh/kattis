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

# Get all the branches and find the path by recursively looking finding the root of the current position (starting with the kitten's position)

def get_path(crt_root, branches, accumulator = ''):
  if accumulator == '':
    accumulator = crt_root

  for i in range(len(branches)):
    if crt_root in branches[i] and branches[i][0] != crt_root:
      return get_path(branches[i][0], branches, '{0} {1}'.format(accumulator, branches[i][0]))

  return accumulator

line = input()
kitten_position = line

branches = []
line = input()
while line != '-1':
  crt_branch = line.split(' ')
  branches.append(crt_branch)
  line = input()

print(get_path(kitten_position, branches))

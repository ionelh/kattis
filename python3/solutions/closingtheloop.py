# Problem: https://open.kattis.com/problems/closingtheloop

########## GENERATE TEST CASES LOCALLY ##########
dummy_input = [
  '6',
  '1',
  '5B',
  '4',
  '6R 1B 7R 3B',
  '7',
  '5B 4R 3R 2R 5R 4R 3R',
  '2',
  '20B 20R',

  '3',
  '20B 20B 10B',

  '3',
  '1B 1B 1R 1R',
]


def input():
  if len(dummy_input) != 0:
    return dummy_input.pop(0)
  raise EOFError()

################## CODE #####################

def get_result_for_tc(segments_line):
  max_len = 0
  segments = segments_line.split(' ')
  red = []
  blue = []
  for s in segments:
    if s[-1] == 'B':
      blue.append(int(s[:-1]))
      continue

    red.append(int(s[:-1]))

  red.sort()
  blue.sort()

  while len(red) != 0 and len(blue) != 0:
    max_len += red.pop() + blue.pop() - 2

  return max_len

num_tc = int(input())
crt_line = 1
crt_tc = 1

while num_tc * 2 >= crt_line:
  if crt_line % 2 == 0:
    print('Case #{0}: {1}'.format(crt_tc, get_result_for_tc(input())))
    crt_line += 1
    crt_tc += 1
    continue
  line = input()
  crt_line += 1

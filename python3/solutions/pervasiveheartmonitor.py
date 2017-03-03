# Problem: https://open.kattis.com/problems/pervasiveheartmonitor

########## GENERATE TEST CASES LOCALLY ##########

dummy_input = [
  'Lisa Marie Presley 90.2 104.3 110.1 118.7 122.3',
  '72.2 74 79.5 82.1 88.3 87.4 87.2 88.1 83.8 Bono',
  'Ion 10 10 10'
]

def input():
  return dummy_input.pop(0)

################## CODE #####################

# IN PROGRESS!!!!

line = input()

import sys

for line in sys.stdin:
  print(line)
  break
  if line == '':
    break
  split_line = line.split(' ')
  name = ''
  average = 0
  heart_rate_readings_count = 0
  i = 0
  while i < len(split_line):
    if split_line[i].isalpha():
      name += ' {0}'.format(split_line[i])
    else:
      heart_rate_readings_count += 1
      average += float(split_line[i])
    i += 1
  line = input()
  average = average / heart_rate_readings_count
  # print('{0}{1}'.format(average, name).rstrip('\n'))
  print('%.6f%s' % (average, name))

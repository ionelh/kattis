# Problem: https://open.kattis.com/problems/speedlimit

########## GENERATE TEST CASES LOCALLY ##########

dummy_input = [
  '3',
  '20 2',
  '30 6',
  '10 7',
  '2',
  '60 1',
  '30 5',
  '4',
  '15 1',
  '25 2',
  '30 3',
  '10 5',
  '-1'
]

def input():
  return dummy_input.pop(0)

################## CODE #####################

line = input()
data_set = []
result = ''

def compute_miles(data_set):
  sum_of_prev_time_values = 0
  total_miles = 0

  for value in data_set:
    spped_and_time = value.split(' ')
    speed = int(spped_and_time.pop(0))
    time = int(spped_and_time.pop(0)) - sum_of_prev_time_values
    sum_of_prev_time_values += time
    total_miles += speed * time
  return total_miles

while line != '-1':
  line = input()
  if line.find(' ') == -1:
    if len(data_set) > 0:
      result += str(compute_miles(data_set)) + ' miles\n'
    else:
      result += ''
    data_set = []
  else:
    data_set.append(line)


print(result)

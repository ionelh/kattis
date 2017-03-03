# Problem: https://open.kattis.com/problems/cetvrta

########## GENERATE TEST CASES LOCALLY ##########

dummy_input = [
  '30 20',
  '10 10',
  '10 20'
]

def input():
  return dummy_input.pop(0)

################## CODE #####################

# solution: both x's and y's values need to be 2 pairs of identical values, e.g.:
# [2, 2, 1] => [2, 2, 1, 1]
# [2, 1, 2] => [2, 1, 2, 1]
# [1, 1, 2] => [1, 1, 2, 2]
# etc.

line_index = 0
x_s = []
y_s = []

while line_index < 3:
  line_index += 1
  line = input()
  x_y = line.split(' ')
  x_s.append(int(x_y[0]))
  y_s.append(int(x_y[1]))

for index in range(len(x_s)):
  if x_s.count(x_s[index]) == 1:
    x_s.append(x_s[index])

  if y_s.count(y_s[index]) == 1:
    y_s.append(y_s[index])

print('{0} {1}'.format(x_s[3], y_s[3]))


# Problem: https://open.kattis.com/problems/zamka

########## GENERATE TEST CASES LOCALLY ##########

dummy_input = [
  '100',
  '500',
  '12'
]

def input():
  return dummy_input.pop(0)

################## CODE #####################

def sum_digits(number):
  digits_sum = 0
  for char in str(number):
    digits_sum += int(char)

  return digits_sum

input_values = []
line_index = 0

while line_index < 3:
  line = input()
  input_values.append(int(line))
  line_index += 1

# input_values[0] => L from the problem
# input_values[1] => D from the problem
# input_values[2] => X from the problem

# computing them in 2 loops like I do is optimal for most cases, but there are cases where
# computing them in 1 full loop is faster ...

# compute N
N = input_values[0]
while N <= input_values[1]:
  if sum_digits(N) == input_values[2]:
    break
  N += 1

# compute M
M = input_values[1]
while M >= input_values[0]:
  if sum_digits(M) == input_values[2]:
    break
  M -= 1

print('{0}{1}{2}'.format(N, '\n', M))

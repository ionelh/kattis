# Problem: https://open.kattis.com/problems/2048

########## GENERATE TEST CASES LOCALLY ##########
dummy_input = [
  '2 0 0 2',
  '4 16 8 2',
  '2 64 32 4',
  '1024 1024 64 0',
  '0'

  # '2 2 4 8',
  # '4 0 4 4',
  # '16 16 16 16',
  # '32 16 16 32',
  # '0'
]


def input():
  if len(dummy_input) != 0:
    return dummy_input.pop(0)
  raise EOFError()

################## CODE #####################

# See this article on how to rotate matrixes:
# https://stackoverflow.com/questions/42519/how-do-you-rotate-a-two-dimensional-array
def rotate_matrix_90_degrees(matrix):
  return list(zip(*matrix[::-1]))

def rotate_matrix_minus_90_degrees(matrix):
  return list(zip(*matrix))[::-1]

def next_cells_are_empty(line, index):
  ret_val = True
  for cell in line[index:]:
    if cell != '0':
      ret_val = False
      break

  return ret_val

def handle_empty_cells(line, index):
  while True:
    if next_cells_are_empty(line, index):
      break
    if line[index] == '0':
      line.pop(index)
      line.append('0')
      continue
    break

# not proud of this, can be done better
def merge_line(line):
  ret_val = list(line)
  for i in range(len(ret_val)):
    handle_empty_cells(ret_val, i)
    if i != 0 and ret_val[i] == ret_val[i - 1]:
      ret_val[i - 1] = str(int(ret_val[i - 1]) * 2)
      ret_val.pop(i)
      ret_val.append('0')
      handle_empty_cells(ret_val, i)

  return ret_val

i = 0
input_matrix = []
move = 1

while i < 5:
  line = input()
  if i == 4:
    move = int(line)
    break
  input_matrix.append(line.split(' '))
  i += 1

# rotate matrix depending on the move
for i in range(move):
  input_matrix = rotate_matrix_minus_90_degrees(input_matrix)

# merge cells
for line in range(len(input_matrix)):
  input_matrix[line] = merge_line(input_matrix[line])

# rotate back
for i in range(move):
  input_matrix = rotate_matrix_90_degrees(input_matrix)

# print result
for line in input_matrix:
  print(' '.join(line))

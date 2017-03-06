# Problem: https://open.kattis.com/problems/statistics

########## GENERATE TEST CASES LOCALLY ##########

dummy_input = [
  '2 4 10',
  '9 2 5 6 4 5 9 2 1 4',
  '7 6 10 1 2 5 10 9',
  '1 9'
]

def input():
  if len(dummy_input) != 0:
    return dummy_input.pop(0)
  raise EOFError()

################## CODE #####################

def compute_result(data, data_set_no):
  minimum = 1000001
  maximum = -1000001
  data_list = data.split(' ')
  del data_list[0]
  for number in data_list:
    number_int = int(number)
    if number_int > maximum:
      maximum = number_int

    if number_int < minimum:
      minimum = number_int

  return 'Case {0}: {1} {2} {3}'.format(data_set_no, minimum, maximum, maximum - minimum)

line = input()
result = ''
test_case_no = 1
while True:
  try:
    result += compute_result(line, test_case_no) + '\n'
    line = input()
    test_case_no += 1
  except EOFError:
    break

print(result)

# Problem: https://open.kattis.com/problems/4thought

########## GENERATE TEST CASES LOCALLY ##########

dummy_input = [
  '5',
  '9',
  '0',
  '7',
  '11',
  '24'
]

def input():
  if len(dummy_input) != 0:
    return dummy_input.pop(0)
  raise EOFError()

################## CODE #####################

# this is the naive approach ...

operations = [
  '*',
  '+',
  '-',
  '/'
]
expression = '4 {0} 4 {1} 4 {2} 4'
combinations = []
for a in range(4):
  for b in range(4):
    for c in range(4):
      combination = expression.format(operations[a], operations[b], operations[c])
      if combination.find('4 / 4 / 4') != -1:
        combination = combination.replace('4 / 4 / 4', 'int(4 / 4 / 4)')
      combinations.append(combination)

def compute_result_for_line(number):
  formula = 'no solution'
  for combination in combinations:
    if int(eval(combination)) == number:
      if combination.find('int(4 / 4 / 4)') != -1:
        combination = combination.replace('int(4 / 4 / 4)', '4 / 4 / 4')
      formula = '{0} = {1}'.format(combination, number)
      break

  return formula

line = input()

while True:
  try:
    line = input()
    print(compute_result_for_line(int(line)))
  except EOFError:
    break

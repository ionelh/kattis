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

# ... this is a much better approach

operations = [
  '*',
  '+',
  '-',
  '/'
]
expression = '4 {0} 4 {1} 4 {2} 4'
combinations = {}
for a in range(4):
  for b in range(4):
    for c in range(4):
      combination = expression.format(operations[a], operations[b], operations[c])
      eval_combination = combination
      if eval_combination.find('4 / 4 / 4') != -1:
        eval_combination = eval_combination.replace('4 / 4 / 4', 'int(4 / 4 / 4)')
      eval_combination = eval(eval_combination)
      combinations[int(eval_combination)] = combination

line = input()

while True:
  try:
    line = input()
    int_line = int(line)
    if int_line in combinations:
      print('{0} = {1}'.format(combinations[int_line], line))
      continue
    print('no solution')
  except EOFError:
    break

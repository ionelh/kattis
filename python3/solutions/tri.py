# Problem: https://open.kattis.com/problems/tri

########## GENERATE TEST CASES LOCALLY ##########

dummy_input = [
  '5 3 8'
]

def input():
  return dummy_input.pop(0)

################## CODE #####################

line = input().split(' ')
x = int(line[0])
y = int(line[1])
z = int(line[2])
result = ''

combinations = [
  '{0}+{1}=={2}',
  '{0}-{1}=={2}',
  '{0}*{1}=={2}',
  '{0}/{1}=={2}',
  '{0}=={1}+{2}',
  '{0}=={1}-{2}',
  '{0}=={1}*{2}',
  '{0}=={1}/{2}'
]

for combinationIndex in range(len(combinations)):
  if eval(combinations[combinationIndex].format(x, y, z)) is True:
    result = combinations[combinationIndex].format(x, y, z)

print(result.replace('==', '='))


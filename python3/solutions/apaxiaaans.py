# Problem: https://open.kattis.com/problems/apaxiaaans

########## GENERATE TEST CASES LOCALLY ##########

dummy_input = [
  'boooooobapalaxxxxios'
]

def input():
  return dummy_input.pop(0)

################## CODE #####################

# sloppy approach ... can be done faster

line = input()
result = ''

for index in range(len(line)):
  if index == 0:
    result += line[index]
    continue

  crt_char = line[index]
  prev_char = line[index - 1]

  if prev_char != crt_char:
    result += crt_char

print(result)

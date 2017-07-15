# Problem: https://open.kattis.com/problems/acm

########## GENERATE TEST CASES LOCALLY ##########
dummy_input = [
  '7 H right',
  '15 B wrong',
  '30 E wrong',
  '35 E right',
  '80 B wrong',
  '80 B right',
  '100 D wrong',
  '100 C wrong',
  '300 C right',
  '300 D wrong',
  '-1'
]


def input():
  if len(dummy_input) != 0:
    return dummy_input.pop(0)
  raise EOFError()

################## CODE #####################

penalties = {}
scores = []
problem_ids = set()

while True:
  line = input()

  if line == '-1':
    break

  time, problem, resolution = line.split(' ')

  if problem not in penalties:
    penalties[problem] = 0

  if resolution == 'wrong':
    penalties[problem] += 20
    continue

  scores.append(int(time) + penalties[problem])
  problem_ids.add(problem)

print('{} {}'.format(len(problem_ids), sum(scores)))

# Problem: https://open.kattis.com/problems/ptice

########## GENERATE TEST CASES LOCALLY ##########
dummy_input = [
  # '5',
  # 'BAACC'

  '9',
  'AAAABBBBB'
]


def input():
  if len(dummy_input) != 0:
    return dummy_input.pop(0)
  raise EOFError()

################## CODE #####################

questions_no = input()
answers = input()

participants = [
  'Adrian',
  'Bruno',
  'Goran',
]

patterns = [
  'ABC' * 34, # adrian
  'BABC' * 25, # bruno
  'CCAABB' * 17 # goran
]

scores = [
  0, # adrian
  0, # bruno
  0 # goran
]

index = 0
for answer in answers:
  for i in range(len(patterns)):
    if answer == patterns[i][index]:
      scores[i] += 1

  index += 1

winners = []
highest_score = max(scores)

for i in range(len(scores)):
  if scores[i] == highest_score:
    winners.append(participants[i])

print('{0}\n{1}'.format(highest_score, '\n'.join(winners)))

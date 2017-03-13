# Problem: https://open.kattis.com/problems/compoundwords

########## GENERATE TEST CASES LOCALLY ##########
dummy_input = [
  'a bb',
  'ab b',

  # 'a b',
  # 'c d',
]


def input():
  if len(dummy_input) != 0:
    return dummy_input.pop(0)
  raise EOFError()

################## CODE #####################

words = []
while True:
  try:
    words += input().split(' ')
  except EOFError:
    break

def get_words(words, index, dupes):
  combinations = []

  for i in range(len(words)):
    if i == index:
      continue

    crt_prev = words[index] + words[i]
    if crt_prev not in dupes and crt_prev not in combinations:
      combinations.append(crt_prev)

    crt_next = words[i] + words[index]
    if crt_next == crt_prev:
      continue
    if crt_next not in dupes and crt_next not in combinations:
      combinations.append(crt_next)

  return combinations

result = []
i = 0
while i < len(words):
  result += get_words(words, i, result)
  i += 1

print('\n'.join(sorted(result)))

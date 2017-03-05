# Problem: https://open.kattis.com/problems/raggedright

########## GENERATE TEST CASES LOCALLY ##########

dummy_input = [
  'this line is short',
  'this one is a bit longer',
  'and this is the longest of all.'

  # "some blocks",
  # "of text line up",
  # "well on the right,",
  # "but",
  # "some don't."
]

def input():
  if len(dummy_input) != 0:
    return dummy_input.pop(0)
  raise EOFError()

################## CODE #####################

# Must be a faster way, like only iterating once ... like, at the first iteration generate a string lie:
# '({n} - line1) * ({n} - line1) + ({n} - line2) * ({n} - line2) etc.'
# Than at the end, when we know n, use .format() or something similar on the string to replace all n's with the value of the
# longest line and then eval() the entire string

line = input()
lines = []
longest_line = 0

def compute_penalty():
  penalty = 0
  for line in lines:
    line_length = len(line)
    if line_length < longest_line:
      penalty += (longest_line - line_length) * (longest_line - line_length)

  return penalty

while True:
  try:
    line_length = len(line)
    if line_length > longest_line:
      longest_line = line_length

    lines.append(line)
    line = input()
  except EOFError:
    del lines[-1]
    penalty_score = compute_penalty()
    break

print(penalty_score)

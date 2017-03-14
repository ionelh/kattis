# Problem: https://open.kattis.com/problems/prsteni

########## GENERATE TEST CASES LOCALLY ##########
dummy_input = [
  # '3',
  # '8 4 2',
  # '4',
  # '12 3 8 4',
  '4',
  '300 1 1 300',
]


def input():
  if len(dummy_input) != 0:
    return dummy_input.pop(0)
  raise EOFError()

################## CODE #####################

test_cases_no = int(input())
circles = [int(elm) for elm in input().split(' ')]

# Euclid's algorithm for GCD
def get_gcd(a, b):
  if a == b:
    return a
  return get_gcd(abs(a - b), a if a < b else b)

first_circle = circles[0]
i = 1
while i < test_cases_no:
  gcd = get_gcd(first_circle, circles[i])
  print('{0}/{1}'.format(int(first_circle / gcd), int(circles[i] / gcd)))
  i += 1

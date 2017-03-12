# Problem: https://open.kattis.com/problems/exactchange2

########## GENERATE TEST CASES LOCALLY ##########
dummy_input = [
  '1',
  '1400',
  '3',
  '500',
  '1000',
  '2000',
]


def input():
  if len(dummy_input) != 0:
    return dummy_input.pop(0)
  raise EOFError()

################## CODE #####################

# (Untested) Naive solution using recursion to compute all possible combinations, see my other solution using dynamic programming.
# This is a variation of a well known set of problems, just Google "coin change problem", or visit some of the sites that helped me:
# http://stackoverflow.com/questions/3947867/find-the-least-number-of-coins-required-that-can-make-any-change-from-1-to-99-ce
# http://www.geeksforgeeks.org/find-minimum-number-of-coins-that-make-a-change/

def get_combinations(coins, length):
  # result = [] # without yield
  coins_len = len(coins)
  for i in range(coins_len):
    if length == 1:
      yield (coins[i],)
      # result.append([coins[i]]) # without yield
    else:
      for next in get_combinations(coins[i + 1:coins_len], length - 1):
        yield (coins[i],) + next
        # result.append([coins[i]] + next) # without yield

  # return result # without yield

coins = []
test_cases_no = int(input())
while test_cases_no > 0:
  price = int(input())
  coins_no = int(input())

  for i in range(coins_no):
    coins.append(int(input()))

  smallest_sum = 19999
  coins_used = 101
  for i in range(coins_no):
    if smallest_sum == price:
      break
    for combination in list(get_combinations(coins, i + 1)):
      combination_sum = sum(combination)

      if combination_sum == price:
        smallest_sum = combination_sum
        coins_used = i + 1
        break

      if combination_sum > price and combination_sum < smallest_sum:
        smallest_sum = combination_sum
        coins_used = i + 1

  print(smallest_sum, coins_used)

  test_cases_no -= 1
  coins = []

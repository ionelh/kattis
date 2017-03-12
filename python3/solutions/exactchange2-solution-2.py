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

# Proper solution using dynamic programming.
# This is a variation of a well known set of problems, just Google "coin change problem", or visit some of the sites that helped me:
# http://stackoverflow.com/questions/3947867/find-the-least-number-of-coins-required-that-can-make-any-change-from-1-to-99-ce
# http://www.geeksforgeeks.org/find-minimum-number-of-coins-that-make-a-change/

coins = []
test_cases_no = int(input())
while test_cases_no > 0:
  # table[x] will hold the minimum number of coins required for price x
  # Initialize all values in the table with the maximum value, which is the maximum price + 1 (can also init with infinite)
  table = [10001] * 19999 # 19999 = max price - 1 + max coin

  # if price is 0 ...
  table[0] = 0

  # the price we need to pay
  price = int(input())
  # the number of coins
  coins_no = int(input())

  for i in range(coins_no):
    coins.append(int(input()))
    # coins = coins + [int(input())]

  # for i in range(coins_no):
  for coin in coins:
    crt_price = price - 1
    while crt_price >= 0:
      if table[crt_price] == 10001:
        crt_price -= 1
        continue
      if table[crt_price + coin] > table[crt_price] + 1:
        table[crt_price + coin] = table[crt_price] + 1

      crt_price -= 1

  i = price
  while True:
    if table[i] != 10001:
      break
    i += 1

  print(i, table[i])


  test_cases_no -= 1
  coins = []

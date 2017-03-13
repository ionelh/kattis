# Problem: https://open.kattis.com/problems/ridofcoins

########## GENERATE TEST CASES LOCALLY ##########
dummy_input = [
  '13',
  '3 2 1 1',
]


def input():
  if len(dummy_input) != 0:
    return dummy_input.pop(0)
  raise EOFError()

################## CODE #####################

# NAIVE APPROACH, TIMES OUT ON KATTIS. TODO: Use dp

denominations = (1, 5, 10, 25)
amount = int(input())
coins = [int(elm) for elm in input().split(' ')]

coins_sum = 0
used_coins = 0
for i in range(len(coins)):
  coins_sum += coins[i] * denominations[i]
  used_coins += coins[i]

# TODO if sum of coins equals amount, stop and print result

index = 3
while index >= 0:
  if coins[index] == 0:
    index -= 1
    continue

  if coins_sum - denominations[index] < amount:
    index -= 1
    continue

  if coins_sum - denominations[index] == amount:
    used_coins -= 1
    coins_sum -= denominations[index]
    break

  coins_sum -= denominations[index]
  coins[index] -= 1
  used_coins -= 1


if coins_sum == amount:
  print(used_coins)
else:
  print('Impossible')

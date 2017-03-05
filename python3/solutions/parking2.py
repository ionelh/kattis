# Problem: https://open.kattis.com/problems/parking2

########## GENERATE TEST CASES LOCALLY ##########

dummy_input = [
  '2',
  '4',
  '24 13 89 37',
  '6',
  '7 30 41 14 39 42'
]

def input():
  if len(dummy_input) != 0:
    return dummy_input.pop(0)
  raise EOFError()

################## CODE #####################

line = input()

def compute_distance_for_shop_round(shopping_round):
  shops_list = shopping_round.split(' ')
  largest = 0
  smallest = 100 # 99 is the maximum parking slot
  for shop in shops_list:
    shop_slot = int(shop)
    if shop_slot < smallest:
      smallest = shop_slot

    if shop_slot > largest:
      largest = shop_slot
  return (largest - smallest) * 2

result = ''
while True:
  try:
    line = input()
    line = input()
    result += str(compute_distance_for_shop_round(line)) + '\n'
  except EOFError:
    break

print(result)

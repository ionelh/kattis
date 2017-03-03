# Problem: https://open.kattis.com/problems/oddmanout

########## GENERATE TEST CASES LOCALLY ##########

dummy_input = [
  '3',
  '3',
  '1 2147483647 2147483647',
  '5',
  '3 4 7 4 3',
  '5',
  '2 10 2 10 5'
]

def input():
  return dummy_input.pop(0)

################## CODE #####################

num_tc = int(input())
crt_tc = 1

while crt_tc <= num_tc:
  num_guests = int(input())
  guests = input().split(' ')
  for i in range(num_guests):
    if guests.count(guests[i]) == 1:
      print('Case #{0}: {1}'.format(crt_tc, guests[i]))
      break
  crt_tc += 1
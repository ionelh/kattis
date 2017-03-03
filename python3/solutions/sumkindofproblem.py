# Problem: https://open.kattis.com/problems/sumkindofproblem

########## GENERATE TEST CASES LOCALLY ##########

dummy_input = [
  '4',
  '1 1',
  '2 10',
  '3 1001',
  '4 5'
]

def input():
  return dummy_input.pop(0)

################## CODE #####################

num_tc = int(input())

while num_tc > 0:
  line = input().split(' ')
  tc_no = line[0]
  n = int(line[1])

  n_divided_2 = n / 2
  n_times_2 = n * 2

  s1 = int((n + 1) * n_divided_2)
  s2 = int(n_times_2 * n_divided_2)
  s3 = int((n_times_2 + 2) * n_divided_2)

  print('{0} {1} {2} {3}'.format(tc_no, s1, s2, s3))
  num_tc -= 1
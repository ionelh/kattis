# Problem: https://open.kattis.com/problems/anotherbrick

import sys
# Cmd + D to print the results in the console

header = [int(x) for x in sys.stdin.readline().split()]
bricks = [int(x) for x in sys.stdin.readline().split()]

target_w = header[1]
target_h = header[0]

crt_row_w = 0
rows = 0

possible = ''

for brick in bricks:
  crt_row_w += brick

  if crt_row_w == target_w:
    rows += 1

    if rows == target_h:
      possible = 'YES'
      break
    crt_row_w = 0

  if crt_row_w > target_w:
    possible = 'NO'
    break

print(possible)

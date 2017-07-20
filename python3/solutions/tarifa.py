# Problem: https://open.kattis.com/problems/tarifa

import sys
# Cmd + D to print the results in the console

crt_line = 1
consumed = 0
megs_per_month = 0
no_of_months = 0

for line in sys.stdin.readlines():
  if crt_line == 1:
    megs_per_month = int(line)
    crt_line += 1
    continue

  if crt_line == 2:
    no_of_months = int(line)
    crt_line += 1
    continue

  consumed += int(line)

print(megs_per_month * (no_of_months + 1) - consumed)


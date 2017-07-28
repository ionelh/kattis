# Problem: https://open.kattis.com/problems/armystrengthhard

import sys
# Cmd + D to print the results in the console

input = sys.stdin.readlines()
no_tc = int(input[0])

for i in range(no_tc):
  g_army = input[4 * i + 3].split()
  m_army = input[4 * i + 4].split()

  max_g = max([int(x) for x in g_army])
  max_m = max([int(x) for x in m_army])
  print('MechaGodzilla' if max_g < max_m else 'Godzilla')

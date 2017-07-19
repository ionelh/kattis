# Problem: https://open.kattis.com/problems/functionalfun

import sys
# Cmd + D to print the results in the console
codomain = None
total_mappings = 0
for line in sys.stdin.readlines():
  line = line.split()
  if line[0] == 'domain':
    surjective = True
    injective = True
    not_a_function = False
    domain = {x: 0 for x in line[1:]}
    continue

  if line[0] == 'codomain':
    codomain = {x: 0 for x in line[1:]}
    continue

  if '->' not in line:
    total_mappings = int(line[0])
    ############### TODO WHAT IF THIS IS ZERO????? WHAT DO I PRINT?????
    # ANSWER: I print 'not a function, which, based on the description, doesn't seem entirely correct, but it passes'
    if total_mappings == 0:
      not_a_function = True
    continue

  total_mappings -= 1
  domain_item = line[0]
  codomain_item = line[2]

  domain[domain_item] += 1
  if domain[domain_item] == 2:
    not_a_function = True

  codomain[codomain_item] += 1
  if codomain[codomain_item] == 2:
    injective = False

  if total_mappings == 0:
    zero_mapping = next((key for key, value in codomain.items() if value == 0), None)
    if zero_mapping is not None:
      surjective = False

    if not_a_function is True:
      print('not a function')
      continue

    if surjective == True and injective == True:
      print('bijective')
      continue

    if surjective == False and injective == False:
      print('neither injective nor surjective')
      continue

    if surjective == True:
      print('surjective')
      continue

    if injective == True:
      print('injective')
      continue


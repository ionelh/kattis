# Problem: https://open.kattis.com/problems/classy

import sys
# Cmd + D to print the results in the console

class_value_map = {
  'lower': '3',
  'middle': '2',
  'upper': '1'
}
no_of_cases = int(sys.stdin.readline())

while no_of_cases > 0:
  no_of_people = int(sys.stdin.readline())
  scores_map = {}
  while no_of_people > 0:
    crt_line = sys.stdin.readline().split()
    crt_person = crt_line[0][:-1]
    crt_class = crt_line[1].split('-')

    crt_class.reverse()
    crt_class = [class_value_map[x] for x in crt_class]

    while len(crt_class) < 10:
      crt_class.append('2')

    score = int(''.join(crt_class))
    if score not in scores_map:
      scores_map[score] = []
    scores_map[score].append(crt_person)

    no_of_people -= 1

  for score in sorted(scores_map):
    print('\n'.join(sorted(scores_map[score])))
  print('==============================')


  no_of_cases -= 1

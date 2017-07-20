# Problem: https://open.kattis.com/problems/ceiling

import sys
# Cmd + D to print the results in the console

import re
def push_to_tree(value, node):
  if node['value'] is None:
    node['value'] = value
    node['left'] = generate_node(None)
    node['right'] = generate_node(None)
    return

  push_to_tree(value, node['left'] if value <= node['value'] else node['right'])

def generate_node(value):
  return {
    'value': value,
    'left': None,
    'right': None
  }

passed_the_first_line = False
bs_trees = [] # this is where I keep all the bs trees from the input
'''
different_shapes is where I keep all individual tree shapes; each shape is a stringified version of the tree, like a hash,
but with the values replaced with a random letter ('v'), so that different values in trees with the same shape are not duped
'''
different_shapes = set()

for line in sys.stdin.readlines():
  if passed_the_first_line is False:
    passed_the_first_line = True
    continue

  line = line.split()
  bs_trees.append(generate_node(None))

  for value in line:
    push_to_tree(int(value), bs_trees[len(bs_trees) - 1])

  s = str(bs_trees[-1])
  different_shapes.add(re.sub("\d+", 'v', s))

print(len(different_shapes))

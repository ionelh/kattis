# Problem: https://open.kattis.com/problems/anagramcounting

import sys
# Cmd + D to print the results in the console

# The formula I's using to calculate the number of anagrams can be found here: https://math.stackexchange.com/a/2158414
def factorial(n):
  if n == 0 or n == 1:
    return 1
  return n * factorial(n - 1)

for line in sys.stdin.readlines():
  line = line[:-1] # drop \n
  chars_count = {x: 0 for x in line}
  dividend = factorial(len(line))

  for char in line:
    chars_count[char] += 1

  divisor = 1
  for occurrence in chars_count:
    divisor *= factorial(chars_count[occurrence])

  print((dividend // divisor))

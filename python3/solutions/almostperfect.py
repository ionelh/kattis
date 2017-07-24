# Problem: https://open.kattis.com/problems/almostperfect

import sys
# Cmd + D to print the results in the console

import math

def divisorGenerator(n):
    large_divisors = []
    for i in range(1, int(math.sqrt(n) + 1)):
        if n % i == 0:
            yield i
            if i*i != n:
                large_divisors.append(int(n / i))
    for divisor in reversed(large_divisors):
        yield divisor

for line in sys.stdin.readlines():
  line = int(line)
  divisors = list(divisorGenerator(line))[:-1]
  divisors_sum = sum(divisors)
  text = 'not perfect'
  if divisors_sum in range(line - 2, line + 3):
    text = 'perfect' if divisors_sum == line else 'almost perfect'
  print('{0} {1}'.format(line, text))

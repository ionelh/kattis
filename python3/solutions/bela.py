# Problem: https://open.kattis.com/problems/bela

########## GENERATE TEST CASES LOCALLY ##########

dummy_input = [
  '4 H',
  'AH',
  'KH',
  'QH',
  'JH',
  'TH',
  '9H',
  '8H',
  '7H',
  'AS',
  'KS',
  'QS',
  'JS',
  'TS',
  '9S',
  '8S',
  '7S'
]

def input():
  return dummy_input.pop(0)

################## CODE #####################

def compute_hand_score(card, suit, dominant_suit):
  if suit == dominant_suit:
    return dominant_values[card]
  return values[card]

values = {
  'A': 11,
  'K': 4,
  'Q': 3,
  'J': 2,
  'T': 10,
  '9': 0,
  '8': 0,
  '7': 0
}

dominant_values = {
  'A': 11,
  'K': 4,
  'Q': 3,
  'J': 20,
  'T': 10,
  '9': 14,
  '8': 0,
  '7': 0
}

first_line = input().split(' ')
total_hands = int(first_line[0])
dominant_suit = first_line[1]
i = 0
max_i = total_hands * 4
total_points = 0

while i < max_i:
  line = input()
  total_points += compute_hand_score(line[0], line[1], dominant_suit)
  i += 1

print(total_points)

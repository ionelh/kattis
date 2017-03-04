# Problem: https://open.kattis.com/problems/falsesecurity

########## GENERATE TEST CASES LOCALLY ##########

dummy_input = [
  'FENDSVTSLHW.EDATS,EULAY',
  'TRDNWPLOEF',
  'NTTTGAZEJUIIGDUZEHKUE',
  'QEWOISE.EIVCAEFNRXTBELYTGD.',
  '?EJHUT.TSMYGW?EJHOT',
  'DSU.XFNCJEVE.OE_UJDXNO_YHU?VIDWDHPDJIKXZT?E',
  'ADAWEKHZN,OTEATWRZMZN_IDWCZGTEPION',
]

def input():
  if len(dummy_input) != 0:
    return dummy_input.pop(0)
  raise EOFError()

################## CODE #####################

# This has so much less iteration than my other solution, but it's so much slower ... Why, why, why?

morse_map = {
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '..--': '_',
  '.-.-': ',',
  '---.': '.',
  '----': '?'
}

alphabet_map = {}
for key in morse_map:
  alphabet_map[morse_map[key]] = key

line = input()
result = ''

# Hard to read, I know ... I am basically getting the reversed numbers string in the problem and getting the value in the same iteration
# In order to do that, I use the extra_iteration var because I need to stay ahead a few loops, as some of the chars I am trying to decode
# may be unavailable at that time
while True:
  try:
    extra_iterations = 0
    line_length = len(line)
    crt_char_index = 0
    morse_message = ''
    decoded_message = ''
    char_index = 0

    while True:
      if char_index > extra_iterations - 1:
        crt_number = len(alphabet_map[line[line_length - (char_index - (extra_iterations - 1))]])

        if crt_char_index + crt_number > len(morse_message):
          extra_iterations += 1
        else:
          crt_char = morse_message[crt_char_index:crt_char_index + crt_number]
          decoded_message += morse_map[crt_char]
          crt_char_index += crt_number

      if char_index < line_length:
        morse_message += alphabet_map[line[char_index]]

      char_index += 1

      if char_index == line_length + extra_iterations:
        break

    result += decoded_message + '\n'
    line = input()
  except EOFError:
    break

print(result)

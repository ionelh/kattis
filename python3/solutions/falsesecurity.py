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

# I have that feeling that I'm over complicating things ... look more into this

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

def encode(message):
  encoded_message = ''
  numbers_string = ''
  for char in message:
    encoded_message += alphabet_map[char]
    numbers_string += str(len(alphabet_map[char]))

  return {
    'message': encoded_message,
    'numbers_string': numbers_string
  }

def decode(message, numbers_string):
  numbers_string = numbers_string[::-1]
  crt_char_index = 0
  decoded_message = ''
  for number in numbers_string:
    number_int = int(number)
    crt_char = message[crt_char_index:crt_char_index + number_int]
    decoded_message += morse_map[crt_char]
    crt_char_index += number_int

  return decoded_message

line = input()
result = ''

while True:
  try:
    encoded = encode(line)
    decoded = decode(encoded['message'], encoded['numbers_string'])
    result += decoded + '\n'
    line = input()
  except EOFError:
    break

print(result)

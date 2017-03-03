# Problem: https://open.kattis.com/problems/symmetricorder

########## GENERATE TEST CASES LOCALLY ##########

dummy_input = [
  '7',
  'Bo',
  'Pat',
  'Jean',
  'Kevin',
  'Claude',
  'William',
  'Marybeth',
  '6',
  'Jim',
  'Ben',
  'Zoe',
  'Joey',
  'Frederick',
  'Annabelle',
  '5',
  'John',
  'Bill',
  'Fran',
  'Stan',
  'Cece',
  '0',
]

def input():
  return dummy_input.pop(0)

################## CODE #####################

line = ''
crt_data_set = []
crt_data_set_item_index = 1
crt_set = 0
result = ''

while line != '0':
  line = input()

  if line.isdigit() is True:
    if len(crt_data_set) > 0:
      set_header = '{0} {1}{2}'.format('SET', crt_set, '\n')
      set_items = ''.join(crt_data_set) + '\n'
      result += set_header + set_items
    crt_data_set = ['\n'] * (int(line) * 2)
    crt_data_set_item_index = 1
    crt_set += 1
    continue

  if crt_data_set_item_index % 2 == 0:
    crt_data_set[len(crt_data_set) - (crt_data_set_item_index - 1)] = line
  else:
    crt_data_set[crt_data_set_item_index - 1] = line

  crt_data_set_item_index += 1

print(result.replace('\n\n', '\n'))

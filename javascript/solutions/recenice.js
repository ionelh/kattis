// Problem: https://open.kattis.com/problems/recenice

let line;
let totalLetters = 0;
const noOfWords = parseInt(readline(), 10);
const inputWords = [];
const wordsMap = {};
const numbersMap = {
  0: '',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety'
};

while (line = readline()) {
  inputWords.push(line);
  if (line !== '$') {
    totalLetters += line.length;
  }
}

let numbersAsWords = convertUpToThreeDigitNumbers(totalLetters);
let sentence = inputWords.join(' ');

while (sentence.replace(/\s/g, '').length !== wordsMap[numbersAsWords] && totalLetters < 1000) {
  numbersAsWords = convertUpToThreeDigitNumbers(totalLetters += 1);
  sentence = inputWords.join(' ').replace('$', numbersAsWords);
}

function convertUpToTwoDigitNumbers(number) {
  if ((number > 0 && number < 20) || (number % 10 === 0)) {
    return numbersMap[number];
  } else {
    return numbersMap[Math.floor(number / 10) * 10] + numbersMap[number % 10];
  }
}

function convertUpToThreeDigitNumbers(number) {
  let retVal = '';
  if (Math.floor(number / 100) !== 0) {
    retVal += numbersMap[Math.floor(number / 100)] + 'hundred';
  }
  
  retVal += convertUpToTwoDigitNumbers(number % 100);
  
  wordsMap[retVal] = number;
  return retVal;
}

print(sentence);

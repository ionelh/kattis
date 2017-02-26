// Problem: https://open.kattis.com/problems/easiest

const results = [];
let line;

// Brute force solution, there must be a more clever way of doing it ...

// 0 indicates end of file
while ((line = readline()) && line !== '0') {
  results.push(
    getFirstNumberWithSameSumOfDigits(parseInt(line), 11)
  );
}

// given inputNumber and startNumber, increments startNumber
// until inputNumber * startNumber has the same sum of digits as inputNumber
function getFirstNumberWithSameSumOfDigits(inputNumber, startNumber) {
  const inputNumberDigitsSum = getDigitsSum(inputNumber);
  let outputNumber;
  
  while (!outputNumber) {
    if (getDigitsSum(inputNumber * startNumber) === inputNumberDigitsSum) {
      outputNumber = startNumber;
    }
    startNumber += 1;
  }
  
  return outputNumber;
}

// returns the sum of digits for inputNumber (eg. 1234 => 10)
function getDigitsSum(inputNumber) {
  inputNumber += '';
  let sumOfDigits = 0;
  const inputNumberLength = inputNumber.length;
  
  for (let index = 0; index < inputNumberLength; index += 1) {
    sumOfDigits += parseInt(inputNumber[index]);
  }
  
  return sumOfDigits;
}

print(results.join('\n'));

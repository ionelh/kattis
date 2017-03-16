// Problem: https://open.kattis.com/problems/aliennumbers

function convertDecimalNumberToSystemNumber(decNumber, system) {
  let base = system.length;
  let stack = [];
  let systemNumber = '';

  while (decNumber > 0) {
    let remainder = decNumber % base;
    stack = [remainder].concat(stack);
    decNumber = (decNumber - (decNumber % base)) / base;
  }

  for (let i in stack) {
    let elm = stack[i];
    systemNumber += system[elm];
  }

  return systemNumber;
}

function convertNumberFromSourceToTarget(systemNumber, sourceSystem, targetSystem) {
  let sourceSystemBase = sourceSystem.length;
  let decDigits = [...new Array(sourceSystemBase)].map((item, index) => index);
  let decNumber = 0;

  let systemNumberRange = [...new Array(systemNumber.length)].map((item, index) => index);
  for (let i in systemNumberRange) {
    let decimalDigit = decDigits[sourceSystem.indexOf(systemNumber[i])];
    decNumber += decimalDigit * Math.pow(sourceSystemBase, systemNumber.length - i - 1);
  }

  return convertDecimalNumberToSystemNumber(decNumber, targetSystem);
}

const nc = parseInt(readline(), 10);
let tc = 0;
while (tc < nc) {
  let line = readline();
  let lineSplit = line.split(' ');
  let result = convertNumberFromSourceToTarget(lineSplit[0], lineSplit[1], lineSplit[2]);
  print('Case #' + (tc + 1) + ': ' + result);
  tc += 1;
}

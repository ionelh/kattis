// Problem: https://open.kattis.com/problems/sevenwonders

let result = 0;
const cards = readline().split('');
const cardTypes = {
  'T': 0,
  'C': 0,
  'G': 0
};

cards.forEach((card) => {
  cardTypes[card] += 1;
});

// there must a mathematical way of doing this in a more elegant manner ... I obviously don't know it, so here's my utterly complicated version ...
let sevenMultiplier;
let zeroFound = false;
for (let cardType in cardTypes) {
  result += Math.pow(cardTypes[cardType], 2);
  if ((!sevenMultiplier || sevenMultiplier > cardTypes[cardType]) && !zeroFound) {
    sevenMultiplier = cardTypes[cardType];
  }
  if (cardTypes[cardType] === 0) {
    zeroFound = true;
    sevenMultiplier = 0;
  }
}

result += sevenMultiplier ? sevenMultiplier * 7 : 0;

print(result);

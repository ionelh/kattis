// Problem: https://open.kattis.com/problems/karte

let results = [13, 13, 13, 13];
let geska;
let line = readline();
let cardsArr = [];
const suitesMap = {
  P: 0,
  K: 1,
  H: 2,
  T: 3
};

for (let i = 0; i < line.length; i += 3) {
  let crtCard = line.substr(i, 3);
  if (cardsArr.indexOf(crtCard) !== -1) {
    geska = 'GRESKA';
    break;
  }
  cardsArr.push(crtCard);
  results[suitesMap[crtCard[0]]] -= 1;
}

print(geska || results.join('\n'));

// Problem: https://open.kattis.com/problems/anewalphabet

const map = {
  a: '@',
  b: '8',
  c: '(',
  d: '|)',
  e: '3',
  f: '#',
  g: '6',
  h: '[-]',
  i: '|',
  j: '_|',
  k: '|<',
  l: '1',
  m: '[]\\/[]',
  n: '[]\\[]',
  o: '0',
  p: '|D',
  q: '(,)',
  r: '|Z',
  s: '$',
  t: "']['",
  u: '|_|',
  v: '\\/',
  w: '\\/\\/',
  x: '}{',
  y: '`/',
  z: '2'
};
let results = readline().split('').map((value) => {
  let valueLC = value.toLowerCase();
  return map[valueLC] ? map[valueLC] : value;
}).join('');

print(results);

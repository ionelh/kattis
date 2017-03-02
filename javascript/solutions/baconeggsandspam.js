// Problem: https://open.kattis.com/problems/baconeggsandspam

let results = [];
let line;

let index = -1;
let menuItemMap;
while (line = readline()) {
  if (!isNaN(line)) {
    index += 1;
    if (index !== 0) {
      results[index - 1] = menuItemMap;
    }
    
    if (line === '0') {
      continue;
    }
    menuItemMap = {};
  } else {
    const splitLine = splitWithTail(line, ' ', 1);
    const name = splitLine[0];
    const menuItems = splitLine[1].split(' ');
    menuItems.forEach((menuItem) => {
      if (!menuItemMap[menuItem]) {
        menuItemMap[menuItem] = [];
      }
      menuItemMap[menuItem].push(name);
    });
  }
}

/*
  Splits a string just like String.prototype.split, but also gets a count argument,
  and will only split the x occurrences (x = count).
  eg. splitWithTail('a b c d', ' ', 2) => ["a", "b", "c d"]
*/
function splitWithTail(str, delim, count) {
  let parts = str.split(delim);
  let tail = parts.slice(count).join(delim);
  let result = parts.slice(0, count);
  result.push(tail);
  return result;
}

results = results.map((value) => {
  let retVal = [];
  for (let prop in value) {
    retVal.push(prop + ' ' + value[prop].sort().join(' '));
  }
  retVal.sort();
  retVal.push('');
  return retVal;
});

print(results.join('\n').replace(/\,/g, '\n'));

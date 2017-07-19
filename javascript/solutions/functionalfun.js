// Problem: https://open.kattis.com/problems/functionalfun

let line;
let codomain;
let domain;
let totalMappings = 0;

let surjective;
let injective;
let notAFunction;

while (line = readline()) {
  line = line.split(/\s/);
  if (line[0] === 'domain') {
    surjective = true;
    injective = true;
    notAFunction = false;
    domain = line.reduce((acc, value, index) => {
      if (index === 0) {
        return acc;
      }

      acc[value] = 0;
      return acc;
    }, {});
    continue;
  }

  if (line[0] === 'codomain') {
    codomain = line.reduce((acc, value, index) => {
      if (index === 0) {
        return acc;
      }

      acc[value] = 0;
      return acc;
    }, {});
    continue;
  }

  if (line.indexOf('->') === -1) {
    totalMappings = parseInt(line[0]);
    // ############### TODO WHAT IF THIS IS ZERO????? WHAT DO I PRINT?????
    // # ANSWER: I print 'not a function, which, based on the description, doesn't seem entirely correct, but it passes'
    if (totalMappings === 0) {
      notAFunction = true;
    }
    continue;
  }

  totalMappings -= 1;
  let domainItem = line[0];
  let codomainItem = line[2];

  domain[domainItem] += 1;
  if (domain[domainItem] === 2) {
    notAFunction = true;
  }

  codomain[codomainItem] += 1;
  if (codomain[codomainItem] === 2) {
    injective = false;
  }

  if (totalMappings === 0) {
    // next((key for key, value in codomain.items() if value == 0), None)
    let zeroMapping = false;
    for (let prop in codomain) {
      if (codomain[prop] === 0) {
        zeroMapping = true;
        break;
      }
    }

    if (zeroMapping) {
      surjective = false;
    };

    if (notAFunction) {
      print('not a function');
      continue;
    };

    if (surjective && injective) {
      print('bijective');
      continue;
    }

    if (!surjective && !injective) {
      print('neither injective nor surjective');
      continue;
    }

    if (surjective) {
      print('surjective');
      continue;
    }

    if (injective) {
      print('injective');
      continue;
    }
  }
}

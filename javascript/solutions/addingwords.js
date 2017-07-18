// Problem: https://open.kattis.com/problems/addingwords

let vars = {};
let values = {};

// NOTE Checking for undefined explicitly as a variable can have the name 'undefined' and / or value 0
// which would cause the expression that checks for falsy to behave unexpectedly

while (line = readline()) {
  line = line.trim();
  let split_line = line.split(/\s+/);
  if (split_line[0] == 'def') {
    let var_name = split_line[1];
    let var_value = parseInt(split_line[2]);

    if (vars[values[var_value]] !== undefined && values[var_value] !== undefined) {
      delete vars[values[var_value]];
    }

    if (values[vars[var_name]] !== undefined && vars[var_name] !== undefined) {
      delete values[vars[var_name]];
    }

    vars[var_name] = var_value;
    values[var_value] = var_name;
  } else if (split_line[0] == 'clear') {
    vars = {};
    values = {};
  } else if (split_line[0] == 'calc') {
    let total = 0

    let instruction = split_line.slice(1).join(' ');
    split_line = split_line.slice(0, split_line.length - 1);
    split_line[0] = '+';

    for (let token = 0; token < split_line.length; token += 1) {
      if (token % 2 !== 0) {
        continue;
      }

      let var_name = split_line[token + 1];
      let operator = split_line[token];

      if (vars[var_name] === undefined) {
        total = '';
        break;
      }

      if (operator == '+') {
        total += vars[var_name];
      } else {
        total -= vars[var_name];
      }
    }

    print(instruction + ' ' + (values[total] !== undefined ? values[total] : 'unknown'));
  }
}

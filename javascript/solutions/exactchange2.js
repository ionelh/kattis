// Problem: https://open.kattis.com/problems/exactchange2

// Proper solution using dynamic programming. I originally did this in python3, but also did a JS port to compare execution.
// This is a variation of a well known set of problems, just Google "coin change problem", or visit some of the sites that helped me:
// http://stackoverflow.com/questions/3947867/find-the-least-number-of-coins-required-that-can-make-any-change-from-1-to-99-ce
// http://www.geeksforgeeks.org/find-minimum-number-of-coins-that-make-a-change/

let coins = [];
let test_cases_no = parseInt(readline(), 10);
while (test_cases_no > 0) {
  // table[x] will hold the minimum number of coins required for price x
  // Initialize all values in the table with the maximum value, which is the maximum price + 1
  
  // The fastest way I've found to init an array of lentgh 19999 with all values set to 10001
  // Execution time on kattis with this method - ~0.10 s
  let table = new Array(19999);
  for (let i = 0, value = 10001, size = 19999; i < size; i++) {
    table[i] = value;
  }
  
  // Another way, a bit slower, to init an array of lentgh 19999 with all values set to 10001
  // Execution time on kattis with this method - ~0.21 s
  // const table = [];
  // let size = 19999;
  // while(size--) table[size] = 10001;

  // if price is 0 ...
  table[0] = 0;

  // the price we need to pay
  const price = parseInt(readline());
  // the number of coins
  const coins_no = parseInt(readline());

  for (let i = 0; i < coins_no; i += 1) {
    coins.push(parseInt(readline()));
  }

  for (let i = 0; i < coins_no; i += 1) {
    let crt_price = price - 1;
    while (crt_price >= 0) {
      if (table[crt_price] === 10001) {
        crt_price -= 1;
        continue;
      }
      
      if (table[crt_price + coins[i]] > table[crt_price] + 1) {
        table[crt_price + coins[i]] = table[crt_price] + 1;
      }

      crt_price -= 1;
    }
  }

  let i = price
  while (true) {
    if (table[i] != 10001) {
      break;
    }
    i += 1;
  }

  print(i + ' ' + table[i]);
  
  test_cases_no -= 1;
  coins = [];
}

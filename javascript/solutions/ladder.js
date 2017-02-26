// Problem: https://open.kattis.com/problems/ladder

/*
        C
       /|
      / |
     /  |
    /   |
   /    |
  /     |
 /      |
/_______| 
B         A
*/
let line;
let CA;
let AB;
let BC;
let ABC;
let BCA;
let CBA = 90;

// get the input data
line = readline();
CA = parseInt(line.split(' ')[0]);
ABC = parseInt(line.split(' ')[1]);

// compute the BCA angle (easy, since the sum of all angles is 180 degrees)
BCA = 180 - (ABC + CBA);

// Highschool trigonometry tells us that:
// Math.tan(ABC) = CA / AB =>
// Math.tan(ABC) * AB = CA =>
// AB = CA / Math.tan(ABC)

// The only problem is that javascript's Math.tan() method expects the value is radians, and we have it in degrees.
// But we can easily convert degrees to radians using this formula: radians = degrees * (pi / 180)
AB = CA / Math.tan(ABC * (Math.PI / 180));
BC = Math.ceil(Math.sqrt(Math.pow(AB, 2) + Math.pow(CA, 2)));

print(BC);

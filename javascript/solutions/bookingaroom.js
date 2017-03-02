// Problem: https://open.kattis.com/problems/bookingaroom

let result = 'too late';
let line = readline().split(' ');
const totalRoomsNo = Number(line[0]);
const bookedRoomsNo = Number(line[1]);
const bookedRooms = [];

if (totalRoomsNo !== bookedRoomsNo) {
  while (line = readline()) {
    bookedRooms.push(Number(line));
  }
  
  result = 1;
  
  while (bookedRooms.indexOf(result) !== -1) {
    result += 1;
  }
}

print(result);

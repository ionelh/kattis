// Problem: https://open.kattis.com/problems/aaah

let result = '';
const jonsAh = readline();
const doctorsAh = readline();

result = jonsAh.length >= doctorsAh.length ? 'go' : 'no';

print(result);

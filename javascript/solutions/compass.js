// Problem: https://open.kattis.com/problems/compass

let result = '';
const crtDeg = Number(readline());
const targetDeg = Number(readline());

const clockWise = (360 - crtDeg + targetDeg) % 360;
const counterClockWise = -(360 - targetDeg + crtDeg) % 360;
result = clockWise <= Math.abs(counterClockWise) ? clockWise : counterClockWise;

print(result);

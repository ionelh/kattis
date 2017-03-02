// Problem: https://open.kattis.com/problems/whatdoesthefoxsay

let results = [];
let line = readline();

let soundsLine = true;
let forestSounds = [];

while (line = readline()) {
  if (line === 'what does the fox say?') {
    soundsLine = true;
    results.push(forestSounds.join(' '));
  } else {
    if (soundsLine) {
      forestSounds = line.split(' ');
    } else {
      let knownSound = line.split(' ')[2];
      while (forestSounds.indexOf(knownSound) !== -1) {
        forestSounds.splice(forestSounds.indexOf(knownSound), 1);
      }
    }
    
    soundsLine = false;
  }
}

print(results.join('\n'));

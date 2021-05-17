const fs = require('fs');

// fs.writeFileSync('notes.txt', 'My name is Ylva.');

fs.appendFileSync('notes.txt', ' This message is created by appendFileSync!');

const chalk = require('chalk');
const getNotes = require('./notes');

const message = getNotes();
console.log(message);

const chalkMsg = chalk.blue.inverse('Error!');
console.log(chalkMsg);

const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

// Customise yargs version
yargs.version('1.1.0');

// add, remove, read, list

// create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler() {
    console.log('Adding a new note');
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler() {
    console.log('Removing the note');
  }
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler() {
    console.log('Listing notes');
  }
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler() {
    console.log('Reading a note');
  }
});

console.log(yargs.argv);

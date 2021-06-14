const chalk = require('chalk');
const fs = require('fs');

const getNotes = () => {
  return 'Your notes...';
};

// addNote() takes 2 strings (title, body),
// loads any previous notes and saves them into notes array,
// checks for duplicate titles and if no duplicates pushes note to notes array
// then saves notes to notes.json (through saveNotes())
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body
    });

    saveNotes(notes);
    console.log(chalk.green.inverse('New note added'));
  } else {
    console.log(chalk.red.inverse('Note title taken'));
  }
};

// removeNote() loads the notes from notes.json,
// filters through them and excludes any notes that matches the title given.
// Then saves the new array to notes.json.
const removeNote = (title) => {
  const notes = loadNotes();
  const newNotes = notes.filter((note) => {
    return note.title !== title;
  });

  if (notes.length > newNotes.length) {
    console.log(chalk.green.inverse('Note removed!'));
    saveNotes(newNotes);
  } else {
    console.log(chalk.red.inverse('No note found!'));
  }
};

// saveNotes() takes an array of note objects (notes), stringifies them and writes them to notes.json
const saveNotes = (notes) => {
  const stringifiedJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', stringifiedJSON);
};

// loadNotes() will try if the notes.json file exists
// if true it will parse the data in notes.json and return it
// if notes.json doesn't exist it will return an empty array (which we can push our first note into in addNotes()).
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  getNotes,
  addNote,
  removeNote
};

const fs = require('fs');
const chalk = require('chalk');

// addNote() takes 2 strings (title, body),
// loads any previous notes and saves them into notes array,
// checks for duplicate titles and if no duplicates pushes note to notes array
// then saves notes to notes.json (through saveNotes())
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);

  debugger;

  if (!duplicateNote) {
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
const removeNote = title => {
  const notes = loadNotes();
  const newNotes = notes.filter(note => note.title !== title);

  if (notes.length > newNotes.length) {
    console.log(chalk.green.inverse('Note removed!'));
    saveNotes(newNotes);
  } else {
    console.log(chalk.red.inverse('No note found!'));
  }
};

// listNotes() loads in the notes and console logs the title of each note.
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.magenta.inverse('Your Notes'));
  notes.forEach(note => console.log(note.title));
};

// readNote()
const readNote = title => {
  const notes = loadNotes();
  const noteToRead = notes.find(note => note.title === title);

  if (noteToRead) {
    console.log(chalk.magenta.inverse(noteToRead.title));
    console.log(noteToRead.body);
  } else {
    console.log(chalk.red.inverse('Note not found!'));
  }
};

// saveNotes() takes an array of note objects (notes), stringifies them and writes them to notes.json
const saveNotes = notes => {
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
  addNote,
  removeNote,
  listNotes,
  readNote
};

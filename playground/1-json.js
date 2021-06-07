const fs = require('fs');

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday'
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const personBuffer = fs.readFileSync('1-json.json');
const personJSON = personBuffer.toString();
const person = JSON.parse(personJSON);

person.name = 'Ylva';
person.age = 31;

const newPersonJSON = JSON.stringify(person);
fs.writeFileSync('1-json.json', newPersonJSON);

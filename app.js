/*** Importing core modules
 * ****/

/*const fs = require('fs');

fs.writeFileSync('hello.txt', 'My name is Erick.');

fs.appendFileSync('hello.txt', ' I am appending some cool stuff');*/

/*** Importing your own files
 * ****/

/*const firstName = require('./utils');

console.log(firstName);*/

// Challenge

/*const fs = require('fs');
const notes = require('./notes.js')

// fs.writeFileSync('notes.js', '');

const notesConsole = notes();
console.log(notesConsole);*/

/*** Importing npm modules
 * ****/

const validator = require('validator');

console.log(validator.isEmail('erick@hotmail.com'));

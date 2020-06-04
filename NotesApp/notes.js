const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body ) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveData(notes);
        console.log(chalk.green.inverse('A new note has been added'));
    } else {
        console.log(chalk.red.inverse('Note title was already taken'));
    }
}

const removeNote = (title, body) => {
    const notes = loadNotes(); // to read data from the file

    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed'))
        saveData(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No route found'));
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes'))

    notes.forEach(note => {
        console.log(note.title)
    })
}

const readNotes = (title) => {
    const notes = loadNotes();

    const noteFound = notes.find((note) => note.title === title);

    if (noteFound) {
        console.log(chalk.green.inverse(noteFound.title));
        console.log(noteFound.body);

    } else {
        console.log(chalk.red.inverse('No title found'));
    }
}

const saveData = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}


const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e) {
        return [];
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
};
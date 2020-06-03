const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'Your notes...';

const addNote = (title, body ) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title
    );

    if(duplicateNotes.length === 0) {
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
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};
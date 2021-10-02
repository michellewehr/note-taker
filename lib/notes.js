const uniqid = require('uniqid');
let notes = require('../Develop/db/db.json');
const fs = require('fs');
const path = require('path');

function createNewNote(body) {
    const note = body;
    note.id = uniqid();
    notes.push(note);
    fs.writeFileSync(path.join(__dirname, '../Develop/db/db.json'), JSON.stringify(notes, null, 2));
}

function deleteNote(targetId) {
// //     console.log(notes.filter(el => el.id !== id));
//     for (note of notes ) {
//         if (note.id === id) {
//             console.log(note);
//         }
//     }
    notes = notes.filter(note => note.id !== targetId);
    console.log(notes)
    return fs.writeFileSync(path.join(__dirname, '../Develop/db/db.json'),
    JSON.stringify(notes, null, 2));
}

module.exports = { createNewNote, deleteNote } ;
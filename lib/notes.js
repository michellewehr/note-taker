const uniqid = require('uniqid');
const notes = require('../Develop/db/db.json');
const fs = require('fs');
const path = require('path');

function createNewNote(body) {
    const note = body;
    note.id = uniqid();
    const notesData = notes.notesArr;
    console.log(notes);
    notes.push(note);
    // console.log(notes)
    fs.writeFileSync(path.join(__dirname, '../Develop/db/db.json'), JSON.stringify(notes, null, 2));
}

// function deleteNote(id, notes) {
//       const newNotesData = notes.filter(el => 
//         el.id !== id
//     );
//     res.sendFile(path.join(__dirname, '../Develop/db.db.json'), JSON.stringify(newNotesData, null, 2));
//     console.log(newNotesData);
// }

module.exports = createNewNote ;
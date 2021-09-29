const router = require('express').Router();  
const path = require('path');
//get database 
const { notes } = require('../Develop/db/db.json')
const fs = require('fs');

function createNewNote(body, notesArr) {
    const note = body;
    notesArr.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../Develop/db/db.json'),
        JSON.stringify({ notes: notesArr }, null, 2)
    );
    return note;
}

  //API ROUTES:
  //GET /api/notes should read the db.json file and return all saved notes as JSON.
  router.get('/notes', (req, res) => {
    res.json(notes);
})

//API ROUTES:
//POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

  const note = createNewNote(req.body, notes);
  res.json(notes);
})

module.exports = router;
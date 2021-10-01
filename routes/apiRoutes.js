   
const router = require('express').Router();  
const path = require('path');
//get database 
const notes = require('../Develop/db/db.json')
const fs = require('fs');
const createNewNote = require('../lib/notes');

  //GET /api/notes should read the db.json file and return all saved notes as JSON.
  router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/db/db.json'));
})

//POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
router.post('/notes', (req, res) => {
  res.json(createNewNote(req.body));
})

//delete a note
router.delete('/notes/:id', (req, res) => {
  const id = req.params.id;
    const newNotesData = notes.filter(el => 
        el.id !== id
    );
    res.sendFile(path.join(__dirname, '../Develop/db/db.json'), JSON.stringify(newNotesData, null, 2));
    console.log('hi');
})

module.exports = router;
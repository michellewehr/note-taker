   
const router = require('express').Router();  
const path = require('path');
//get database 
const notes = require('../Develop/db/db.json')
const fs = require('fs');
const { createNewNote, deleteNote } = require('../lib/notes');



  //GET /api/notes should read the db.json file and return all saved notes as JSON.
  router.get('/notes', (req, res) => {
    return res.sendFile(path.join(__dirname, '../Develop/db/db.json'));
})

//POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
router.post('/notes', (req, res) => {
  return res.json(createNewNote(req.body));
})

//delete a note
router.delete('/notes/:id', (req, res) => {
  return res.json(deleteNote(req.params.id));
})

module.exports = router;
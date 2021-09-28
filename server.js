const express = require('express');

const PORT = process.env.PORT || 3001;
//get database 
const { notes } = require('./Develop/db/db.json');
//path
const path = require('path');



const app = express();

// GET /notes should return the notes.html file.
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
})

// GET * should return the index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
  });

app.listen(PORT, () => {
    console.log(`Server now on port ${PORT}!`)
})
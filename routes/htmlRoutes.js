const router = require('express').Router();
const path = require('path');

// HTML ROUTES: 
// GET /notes should return the notes.html file.
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../Develop/public/notes.html'));
});

// HTML ROUTES: 
// GET * should return the index.html file.
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/index.html'));
  });

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/index.html'));
  });

module.exports = router;
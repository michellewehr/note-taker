const express = require('express');
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
//get database 
const { notes } = require('./Develop/db/db.json');
//path
// const path = require('path');


const app = express();

//API routes
app.use('/api', apiRoutes);
// HTML routes
app.use('/', htmlRoutes);



app.listen(PORT, () => {
    console.log(`Server now on port ${PORT}!`)
})
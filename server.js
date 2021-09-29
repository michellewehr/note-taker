const express = require('express');
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
//get database 
const { notes } = require('./Develop/db/db.json');

const app = express();
//parse incoming string/array data
app.use(express.urlencoded({ extended: true }));
//parse incoming JSON data
app.use(express.json());


//API routes
app.use('/api', apiRoutes);
// HTML routes
app.use('/', htmlRoutes);



app.listen(PORT, () => {
    console.log(`Server now on port ${PORT}!`)
})
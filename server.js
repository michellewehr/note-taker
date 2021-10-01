const express = require('express');
const PORT = process.env.PORT || 3001;

const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes');


const app = express();

//MIDDLEWARE
//parse incoming string/array data
app.use(express.urlencoded({ extended: true }));
//parse incoming JSON data
app.use(express.json());
app.use(express.static('./Develop/public'));

//API routes
app.use('/api', apiRoutes);
// HTML routes
app.use('/', htmlRoutes);



app.listen(PORT, () => {
    console.log(`Server now on port ${PORT}!`)
})
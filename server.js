// imports
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

const indexRouter = require('./routes/index');

//initialize App
const app = express();

// Set view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); // directory of the views

// Initialize Body-Parser
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }) );

// app.get('/', (req, res) => {
//     res.send('Hello from the server page');
// });

// Connection to db


// Routes
app.use('/', indexRouter);

// Listen to port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
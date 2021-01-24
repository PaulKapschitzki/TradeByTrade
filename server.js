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
app.use(express.static('public')); // Make public folder known
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }) );

// Connection to db
const mongoose = require('mongoose');
const db = mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
// const db = mongoose.connection;
// db.on('error', error => console.error(error));
// db.once('open', () => console.log('Connected to Mongoose'));

// Routes
app.use('/', indexRouter);

// Listen to port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
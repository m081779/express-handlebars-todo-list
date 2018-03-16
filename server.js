//Dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path')
const logger = require('morgan');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const favicon = require('serve-favicon');


//setting up database
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1/practiceDB';
mongoose.connect(MONGODB_URI);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//setting up morgan middleware
app.use(logger('dev'));

//setting up body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//setting up handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//serving blank favicon to keep from throwing 404 errors
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

//setting up static path for serving static files
app.use(express.static(path.join(__dirname, 'public')));

//Bringing in the routes
const index = require('./routes/index');
const api = require('./routes/api');

app.use('/', index);
app.use('/api', api);

//Server starts listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
  console.log('Server listening on port', PORT)
});
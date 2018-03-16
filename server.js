const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path')
const logger = require('morgan');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
var favicon = require('serve-favicon');


const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1/practiceDB';
mongoose.connect(MONGODB_URI);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.use(express.static(path.join(__dirname, 'public')));

const index = require('./routes/index');
const api = require('./routes/api');


app.use('/', index);
app.use('/api', api);


const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
  console.log('app listening on port', PORT)
})
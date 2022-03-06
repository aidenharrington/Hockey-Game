const express = require('express');
const bodyParser = require('body-parser');
const setupRoute = require('./routes/setup');
const questionRoute = require('./routes/question');
require('dotenv').config();

// var mongoose = require('mongoose');
const { Player } = require('./models/player')
// mongoose.connect('mongodb://mongodb:27017/hockey-game', { useNewUrlParser: true });

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://mongodb:27017/hockey-game';

MongoClient.connect(url, function(err, db) {
    if (err) {
        console.log(err);
    } else {
        console.log('connected');
    }
});

const app = express();

const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());

app.use('/setup', setupRoute);
app.use('/question', questionRoute);

app.use((req, res, next) => {
  res.send('Welcome to Express');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

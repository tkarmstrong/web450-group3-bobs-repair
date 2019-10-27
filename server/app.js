const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const Invoice = require('./models/invoice');
const Role = require('./models/role');
const SecurityQuestion = require('./models/securityQuestion');
const User = require('./models/user');
const router = express.Router();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': true}));
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../dist/bcrs')));
app.use('/', express.static(path.join(__dirname, '../dist/bcrs')));

// Global variables
const serverPort = process.env.PORT || 3000;

/************************* Mongoose connection strings go below this line  ***************/

// ! Connect to Development DB - Must comment out for prod build

const mongoDB = "mongodb+srv://super-admin:Pa$$word1@bcrs1-r0sf0.mongodb.net/BCRS-dev?retryWrites=true&w=majority";
mongoose.connect(mongoDB, {
  useNewUrlParser: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function() {
  console.log("Application connected to Atlas MongoDB instance");
});


// * Connect to Production DB - Remove comment block then comment dev above before build
/*
const mongoDB = "MongoDB:mongodb+srv://super-admin:Pa$$word1@bcrs-prod1-zhpta.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoDB, {
  useNewUrlParser: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function() {
  console.log("Application connected to Atlas MongoDB instance");
});
*/



/************************* API routes go below this line ********************/

// Test - Aaron

/**
 * Creates an express server and listens on port 3000
 */
http.createServer(app).listen(serverPort, function() {
  console.log(`Application started and listing on port: ${serverPort}`);
});

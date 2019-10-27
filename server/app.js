/*
; =======================================================
; Title: app.js (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, [Aaron Wilson]
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
;========================================================
*/

/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

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

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../dist/bcrs')));
app.use('/', express.static(path.join(__dirname, '../dist/bcrs')));

// Global variables
const serverPort = process.env.PORT || 3000;

/** *********************** Mongoose connection strings go below this line  ************** */

// ! Connect to Development DB - Must comment out for prod build

const mongoDB = 'mongodb+srv://super-admin:Pa$$word1@bcrs1-r0sf0.mongodb.net/BCRS-dev?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connected error: '));
db.once('open', () => {
  console.log('Application connected to Atlas MongoDB instance');
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


/** *********************** API routes go below this line ******************* */

// User CRUD Operations

// Create new user.
router.post('/api/user', (req, res, next) => {
  const user = new User({
    userId: req.body._id,
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    address: req.body.address,
    email: req.body.email,
    role: req.body.role,
    selectedSecurityQuestions: [],
    dateCreated: req.body.date_created,
    dateModified: req.body.date_modified,
  });

  User.create(user, (err) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    console.log(user);
    return res.json(user);
  });
});

// Read one user by id.
router.get('api/user/:id', (req, res, next) => {
  User.findOne({ userId: req.params.id }, (err, user) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    console.log(user);
    return res.json(user);
  });
});

// Read for all users.
router.get('/api/users', (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    console.log(users);
    return res.json(users);
  });
});

// Role CRUD Operations

// Create new role.
router.post('/api/role', (req, res, next) => {
  const role = {
    roleId: req.body.userId,
    roleTitle: req.body.roleTitle,
  };

  User.create(role, (err) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    console.log(role);
    return res.json(role);
  });
});

// Read one role by id.
router.get('api/role/:id', (req, res, next) => {
  Role.findOne({ roleId: req.params.id }, (err, role) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    console.log(role);
    return res.json(role);
  });
});

// Read for all roles.
router.get('/api/roles', (req, res, next) => {
  Role.find({}, (err, roles) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    console.log(roles);
    return res.json(roles);
  });
});

// SecurityQuestions CRUD Operations

// Create new security question.
router.post('/api/security-question', (req, res, next) => {
  const securityQuestion = {
    securityQuestionId: req.body.securityQuestionId,
    question: req.body.question,
  };

  SecurityQuestion.create(securityQuestion, (err) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    console.log(securityQuestion);
    return res.json(securityQuestion);
  });
});

// Read one security question by id.
router.get('api/security-question/:id', (req, res, next) => {
  SecurityQuestion.findOne({ securityQuestion: req.params.id }, (err, securityQuestion) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    console.log(securityQuestion);
    return res.json(securityQuestion);
  });
});

// Read for all security questions.
router.get('/api/security-questions', (req, res, next) => {
  SecurityQuestion.find({}, (err, securityQuestions) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    console.log(securityQuestions);
    return res.json(securityQuestions);
  });
});

// Invoice CRUD Operations

// Create new invoice.
router.post('/api/invoice', (req, res, next) => {
  const invoice = {
    userId: req.body.userId,
    dateCreated: req.body.date_created,
    services: [],
    partsCost: req.body.partsCost,
    laborHrs: req.body.laborHrs,
    totalCost: req.body.totalCost,
  };

  Invoice.create(invoice, (err) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    console.log(invoice);
    return res.json(invoice);
  });
});

// Read one invoice by id.
router.get('api/invoice/:id', (req, res, next) => {
  Role.findOne({ invoiceId: req.params.id }, (err, invoice) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    console.log(invoice);
    return res.json(invoice);
  });
});

// Read for all invoices.
router.get('/api/invoices', (req, res, next) => {
  Role.find({}, (err, invoices) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    console.log(invoices);
    return res.json(invoices);
  });
});

/**
 * Creates an express server and listens on port 3000
 */
http.createServer(app).listen(serverPort, () => {
  console.log(`Application started and listing on port: ${serverPort}`);
});

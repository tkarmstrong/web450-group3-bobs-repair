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
const bcrypt = require('bcrypt');

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
app.post('/api/users/register', function(req, res, next) {
  User.findOne({'username': req.body.username}, function(err, user) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      if (!user) {
        // The selected username is unique
        let hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);
        let u = {
          username: req.body.username,
          password: hashedPassword,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          phoneNumber: req.body.phoneNumber,
          address: req.body.address,
          email: req.body.email,
          selectedSecurityQuestions: req.body.selectedSecurityQuestions,
          dateCreated: req.body.dateCreated
        }
        User.create(u, function(err, newUser) {
          if (err) {
            console.log(err);
            return next(err);
          } else {
            console.log(newUser);
            res.json(newUser);
          }
        })
      } else {
        // The selected username is already in use
        console.log('The selected username: ${req.body.username} is already in use!');
        res.status(500).send({
          text: 'The selected username: ${req.body.username} is already in use!',
          time_stamp: new Date()
        })
      }
    }
  })
})

// User login
app.post("/api/login", (req, res, next) => {
  let thisUser;
  User.findOne({ username: req.body.username })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Authentication failed"
        });
      }
      thisUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Authentication failed"
        });
      }
      res.status(200).json({
        userId: thisUser._id,
        name_first: thisUser.firstName
      });
    })
    .catch(err => {
      return res.status(401).json({
        message: "Authentication failed"
      });
    });
});

// Read one user by id.
app.get('api/user/:id', (req, res, next) => {
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
app.get('/api/users', (req, res, next) => {
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
app.post('/api/role', (req, res, next) => {
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
app.get('api/role/:id', (req, res, next) => {
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
app.get('/api/roles', (req, res, next) => {
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
app.post('/api/security-question', (req, res, next) => {
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
app.get('api/security-question/:id', (req, res, next) => {
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
app.get('/api/security-questions', (req, res, next) => {
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
app.post('/api/invoice', (req, res, next) => {
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
app.get('api/invoice/:id', (req, res, next) => {
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
app.get('/api/invoices', (req, res, next) => {
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

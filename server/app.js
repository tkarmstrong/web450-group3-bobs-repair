/*
; =======================================================
; Title: app.js (Week 6)
; Authors: [Tyler Armstrong], David Tarvin, [Aaron Wilson]
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
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

// const mongoDB = 'mongodb+srv://super-admin:Pa$$word1@bcrs-prod1-zhpta.mongodb.net/bcrs-prod1?retryWrites=true&w=majority';
// mongoose.connect(mongoDB, {
//   useNewUrlParser: true,
// });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connected error: '));
// db.once('open', () => {
//   console.log('Application connected to Atlas MongoDB instance');
// });

/** *********************** API routes go below this line ******************* */

// User CRUD Operations

// Create new user.
app.post('/api/users/', function(req, res, next) {
  let saltRounds = 10;
  User.findOne({'username': req.body.username}, function(err, user) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      if (!user) {
        // The selected username is unique
        console.log('User is unique.')
        console.log(req.body.password);
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
        console.log(`The selected username: ${req.body.username} is already in use!`);
        res.status(500).send({
          text: `The selected username: ${req.body.username} is already in use!`,
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
          message: "Authentication failed. No user."
        });
      }
      thisUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Authentication failed. Password mismatch."
        });
      }
      res.status(200).json({
        userId: thisUser._id,
        firstName: thisUser.firstName
      });
    })
    .catch(err => {
      return res.status(401).json({
        message: "Authentication failed. Unknown error."
      });
    });
});

// Read one user by id.
app.get('/api/users/:id', (req, res, next) => {
  User.findOne({ '_id': req.params.id }, (err, user) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    console.log(user);
    return res.json(user);
  });
});

// Read one user by username.
app.get('/api/users/username/:username', (req, res, next) => {
  User.findOne({ 'username': req.params.username }, (err, user) => {
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


// Update user
app.put('/api/users/update/:id', (req, res, next) => {
  User.findOne({'_id': req.params.id}, (err, user) => {
    console.log(user);
    if (err) {
      console.log(err);
      return next(err);
    } else {

      console.log(user);

      user.set({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        email: req.body.email
      })

      user.save((err, savedUser) => {
        if (err) {
          console.log(err);
          return next(err);
        } else {
          console.log(savedUser);
          res.json(savedUser);
        }
      })
    }
  })
})

// Delete user
app.delete('/api/users/:id', (req, res, next) => {
  User.findByIdAndDelete({'_id': req.params.id}, (err, user) => {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(user);
      res.json(user);
    }
  })
})

// Forgot Password
// app.get('/api/forgot-password/:username', function(req, res, next){
//   let saltRounds = 10;
//   const query = { 'username': req.params.username };
//   User.findOne(query, function(err, user) {
//     if (err) {
//       console.log(err);
//       return next(err);
//     } else {
//       console.log(user);
//       if (!user.username) {
//         return status(500).json({
//           message: "This user does not exist. Register for an account instead."
//         })
//       } else {
//         let hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);
//         let securePassword = {
//           password: hashedPassword
//         }
//         User.updateOne(query, securePassword, function(err, rawResponse) {
//           if (err) {
//             console.log(err);
//             return next(err);
//           } else {
//             console.log(rawResponse);
//             res.json(rawResponse);
//           }
//         })
//       }

//     }
//   })
// })

// Forgot Password Operations
// Verify username
app.get('/api/verify/users/:username', function(req, res, next) {
  User.findOne({'username': req.params.username}, function(err, user) {
    if (err) {
      console.log(err);
      return next(err)
    } else {
      console.log(user);
      res.json(user);
    }
  })
})

// Verify security questions
app.get('/api/verify/users/:username/security-questions', function(req, res, next) {
  User.findOne({'username': req.params.username}, function(err, user) {
    if (err) {
      console.log(err);
      return next(err)
    } else {
      console.log(user);
      res.json(user);
    }
  })
})



app.post('/api/verify/users/:username/security-questions', function(req, res, next) {
  const answerToSecurityQuestion1 = req.body.answerToSecurityQuestion1;
  console.log('The answer to Security Question 1 is ' + answerToSecurityQuestion1);

  const answerToSecurityQuestion2 = req.body.answerToSecurityQuestion2;
  console.log('The answer to Security Question 2 is ' + answerToSecurityQuestion2);

  const answerToSecurityQuestion3 = req.body.answerToSecurityQuestion3;
  console.log('The answer to Security Question 3 is ' + answerToSecurityQuestion3);

  User.findOne({'username': req.params.username}, function(err, user) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(user);

      let answer1IsValid = answerToSecurityQuestion1 === user.securityQuestions[0].answer;
      console.log('answer1IsValid = ' + answer1IsValid);

      let answer2IsValid = answerToSecurityQuestion2 === user.securityQuestions[1].answer;
      console.log('answer2IsValid = ' + answer2IsValid);

      let answer3IsValid = answerToSecurityQuestion3 === user.securityQuestions[2].answer;
      console.log('answer3IsValid = ' + answer3IsValid);

      if (answer1IsValid && answer2IsValid && answer3IsValid) {
        res.status(200).send({
          type: 'success',
          auth: true
        })
      } else {
        res.status(200).send({
          type: 'error',
          auth: false
        })
      }
    }
  })
});

// Reset password
app.post('/api/users/:username/reset-password', function(req, res, next) {
  const password = req.body.password;

  User.findOne({'username': req.params.username}, function (err, user) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(user);

      let hashedPassword = bcrypt.hashSync(password, 10);

      user.set({
        password: hashedPassword
      });

      user.save(function(err, user) {
        if (err) {
          console.log(err);
          return next(err);
        } else {
          console.log(user);
          res.json(user);
        }
      })
    }
  })
});


// Role CRUD Operations

// Create new role.
app.post('/api/roles', (req, res, next) => {
  const role = {
    roleTitle: req.body.roleTitle,
  };

  Role.create(role, (err) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    console.log(role);
    return res.json(role);
  });
});

// Read one role by id.
app.get('/api/roles/:id', (req, res, next) => {
  Role.findOne({ '_id': req.params.id }, (err, role) => {
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

// Update role
app.put('/api/roles/update/:id', (req, res, next) => {
  Role.findOne({'_id': req.params.id}, (err, role) => {
    console.log(role);
    if (err) {
      console.log(err);
      return next(err);
    } else {

      console.log(role);

      role.set({
        roleTitle: req.body.roleTitle
      })

      role.save((err, savedRole) => {
        if (err) {
          console.log(err);
          return next(err);
        } else {
          console.log(savedRole);
          res.json(savedRole);
        }
      })
    }
  })
})

// Delete role
app.delete('/api/roles/:id', (req, res, next) => {
  Role.findByIdAndDelete({'_id': req.params.id}, (err, role) => {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(role);
      res.json(role);
    }
  })
})

// SecurityQuestions CRUD Operations

// Create new security question.
app.post('/api/security-questions', (req, res, next) => {
  const securityQuestion = {
    questionText: req.body.questionText
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
app.get('/api/security-questions/:id', (req, res, next) => {
  SecurityQuestion.findOne({ '_id': req.params.id }, (err, securityQuestion) => {
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
    return res.json(securityQuestions);
  });
});

// Update security question
app.put('/api/security-questions/update/:id', (req, res, next) => {
  SecurityQuestion.findOne({'_id': req.params.id}, (err, securityQuestion) => {
    console.log(securityQuestion);
    if (err) {
      console.log(err);
      return next(err);
    } else {

      console.log(securityQuestion);

      securityQuestion.set({
        questionText: req.body.questionText
      })

      securityQuestion.save((err, savedSecurityQuestion) => {
        if (err) {
          console.log(err);
          return next(err);
        } else {
          console.log(savedSecurityQuestion);
          res.json(savedSecurityQuestion);
        }
      })
    }
  })
})

app.post('/api/security-questions/find-by-ids', function(req, res, next) {
  const question1 = req.body.question1;
  const question2 = req.body.question2;
  const question3 = req.body.question3;

  SecurityQuestion.find({
    $or: [
      {'_id': question1},
      {'_id': question2},
      {'_id': question3}
    ]
  }).exec(function(err, securityQuestions ) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(securityQuestions);
      res.json(securityQuestions);
    }
  })
});

// Delete role
app.delete('/api/security-questions/:id', (req, res, next) => {
  SecurityQuestion.findByIdAndDelete({'_id': req.params.id}, (err, securityQuestion) => {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(securityQuestion);
      res.json(securityQuestion);
    }
  })
})

// Invoice CRUD Operations

// Create new invoice.
app.post('/api/invoices', (req, res, next) => {
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
app.get('api/invoices/:id', (req, res, next) => {
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

// Update invoice
app.put('/api/invoices/update/:id', (req, res, next) => {
  Invoice.findOne({'_id': req.params.id}, (err, invoice) => {
    console.log(invoice);
    if (err) {
      console.log(err);
      return next(err);
    } else {

      console.log(invoice);

      invoice.set({
        userId: req.body.userId,
        dateCreated: req.body.date_created,
        services: [],
        partsCost: req.body.partsCost,
        laborHrs: req.body.laborHrs,
        totalCost: req.body.totalCost
      })

      invoice.save((err, invoice) => {
        if (err) {
          console.log(err);
          return next(err);
        } else {
          console.log(savedInvoice);
          res.json(savedInvoice);
        }
      })
    }
  })
})

// Delete invoice
app.delete('/api/invoices/:id', (req, res, next) => {
  Invoice.findByIdAndDelete({'_id': req.params.id}, (err, invoice) => {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(invoice);
      res.json(invoice);
    }
  })
})

// Service CRUD Operations

// Create new service.
app.post('/api/services', (req, res, next) => {
  const service = {
    serviceText: req.body.serviceText,
    cost: req.body.cost
  };

  Service.create(service, (err) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    console.log(service);
    return res.json(service);
  });
});

// Read one role by id.
app.get('/api/services/:id', (req, res, next) => {
  Service.findOne({ '_id': req.params.id }, (err, service) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    console.log(service);
    return res.json(service);
  });
});

// Read for all roles.
app.get('/api/services', (req, res, next) => {
  Service.find({}, (err, services) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    console.log(services);
    return res.json(services);
  });
});

// Update service
app.put('/api/services/update/:id', (req, res, next) => {
  Service.findOne({'_id': req.params.id}, (err, service) => {
    console.log(service);
    if (err) {
      console.log(err);
      return next(err);
    } else {

      console.log(service);

      service.set({
        serviceText: req.body.serviceText,
        cost: req.body.cost
      })

      role.save((err, savedService) => {
        if (err) {
          console.log(err);
          return next(err);
        } else {
          console.log(savedService);
          res.json(savedService);
        }
      })
    }
  })
})

// Delete service
app.delete('/api/services/:id', (req, res, next) => {
  Service.findByIdAndDelete({'_id': req.params.id}, (err, service) => {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(service);
      res.json(service);
    }
  })
})

/**
 * Creates an express server and listens on port 3000
 */
http.createServer(app).listen(serverPort, () => {
  console.log(`Application started and listing on port: ${serverPort}`);
});

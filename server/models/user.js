/*
; ============================================
; Title:  user.js
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   23 Oct 2019
; Description: Bob's Computer Repair Shop
;=============================================
*/

const mongoose = require('mongoose');

let selectedSecurityQuestions = mongoose.Schema({
  questionId: { type: String },
  answerText: { type: String }
});

let userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true, dropDups: true },
  password: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  phoneNumber: { type: String },
  address: { type: String },
  email: { type: String },
  role: { type: String, default: 'standard' },
  selectedSecurityQuestions: [selectedSecurityQuestions],
  date_created: { type: Date, default: new Date() },
  date_modified: { type: Date }
},
{
  collection: 'users'
});

module.exports = mongoose.model('User', userSchema);

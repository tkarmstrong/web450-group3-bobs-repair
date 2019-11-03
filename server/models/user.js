/*
; =======================================================
; Title: user.js (Week 6)
; Author: Richard Krasso
; Modified: Tyler Armstrong, [David Tarvin], Aaron Wilson
; Date: 23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/

const mongoose = require('mongoose');

const selectedSecurityQuestions = mongoose.Schema({
  questionId: {type: String},
  answerText: {type: String}
});

const userSchema = mongoose.Schema({
  username: {
    type: String, required: true, unique: true, dropDups: true,
  },
  password: { type: String, required: true }, // Should this be ( unique: true ) as well? David: no
  firstName: { type: String },
  lastName: { type: String },
  phoneNumber: { type: String },
  address: { type: String },
  email: { type: String },
  role: { type: String, default: 'standard' },
  selectedSecurityQuestions: [selectedSecurityQuestions],
  date_created: { type: Date, default: new Date() },
  date_modified: { type: Date, default: new Date() },
},
{
  collection: 'users',
});

module.exports = mongoose.model('User', userSchema);

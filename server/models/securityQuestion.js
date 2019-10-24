/*
; ============================================
; Title:  securityQuestion.js
; Author: David Tarvin
; Date:   23 Oct 2019
; Description: Bob's Computer Repair Shop
;=============================================
*/

const mongoose = require('mongoose');

let securityQuestionSchema = mongoose.Schema({
  questionText: { type: String }
},
{
  collection: 'securityquestions'
});

module.exports = mongoose.model('SecurityQuestion', securityQuestionSchema);

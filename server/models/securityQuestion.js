/*
; =======================================================
; Title:  securityQuestion.js (Week 6)
; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson
; Date:   23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
;========================================================
*/

const mongoose = require('mongoose');

const securityQuestionSchema = mongoose.Schema({
  questionText: { type: String },
},
{
  collection: 'securityquestions',
});

module.exports = mongoose.model('SecurityQuestion', securityQuestionSchema);

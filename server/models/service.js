/*
; =======================================================
; Title:  service.js (Week 6)
; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson
; Date:   28 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/

const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
  serviceText: { type: String },
  cost: { type: Number },
  control: String,
  icon: String
},
{
  collection: 'services',
});

module.exports = mongoose.model('Service', serviceSchema);

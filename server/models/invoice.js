/*
; =======================================================
; Title:  invoice.js (Week 6)
; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson
; Date:   23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/

/* eslint-disable max-len */

const mongoose = require('mongoose');

const selectedServices = mongoose.Schema({
  serviceId: { type: String },
  serviceText: { type: String },
  cost: { type: Number }
})

const invoiceSchema = mongoose.Schema({
  dateCreated: { type: Date, required: true },
  selectedServices: [selectedServices],
  partsCost: { type: Number },
  laborHrs: { type: Number },
  totalCost: { type: Number },
  user: { type: String, required: true },
},
{
  collection: 'invoices',
});

module.exports = mongoose.model('Invoice', invoiceSchema);

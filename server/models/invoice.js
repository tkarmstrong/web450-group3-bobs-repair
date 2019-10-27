/*
; =======================================================
; Title:  invoice.js (Week 6)
; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson
; Date:   23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
;========================================================
*/

/* eslint-disable max-len */

const mongoose = require('mongoose');

const invoiceSchema = mongoose.Schema({
  date_created: { type: Date, required: true, default: new Date() },
  services: [ // i corrected this because arrays should be pluralized for industry standard best practices
    {
      description: { type: String },
      cost: { type: Number },
    },
  ],
  partsCost: { type: Number },
  laborHrs: { type: Number },
  totalCost: { type: Number },
  userId: { type: String, required: true },
},
{
  collection: 'invoices',
});

module.exports = mongoose.model('Invoice', invoiceSchema);

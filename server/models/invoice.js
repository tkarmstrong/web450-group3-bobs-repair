/*
; ============================================
; Title:  invoice.js
; Author: David Tarvin
; Date:   23 Oct 2019
; Description: Bob's Computer Repair Shop
;=============================================
*/

const mongoose = require('mongoose');

let invoiceSchema = mongoose.Schema({
  date_created: { type: Date, required: true, default: new Date() },
  service: [
    {
      description: { type: String },
      cost: { type: Number }
    }
  ],
  partsCost: { type: Number },
  laborHrs: { type: Number },
  totalCost: { type: Number },
  userId: { type: String, required: true }
},
{
  collection: 'invoices'
});

module.exports = mongoose.model('Invoice', invoiceSchema);

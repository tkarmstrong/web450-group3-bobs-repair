/*
; ============================================
; Title:  role.js
; Author: David Tarvin
; Date:   23 Oct 2019
; Description: Bob's Computer Repair Shop
;=============================================
*/

const mongoose = require('mongoose');

let roleSchema = mongoose.Schema({
  roleTitle: { type: String }
},
{
  collection: 'roles'
});

module.exports = mongoose.model('Role', roleSchema);

/*
; =======================================================
; Title:  role.js (Week 6)
; Authors: Tyler Armstrong, [David Tarvin], Aaron Wilson
; Date:   23 Oct 2019
; Description: Bob's Computer Repair Shop
; Legend: [] -> Team member responsible for page.
; =======================================================
*/

const mongoose = require('mongoose');

const roleSchema = mongoose.Schema({
  // Do we want an actual ( roleId ) field here? David: no
  // Tyler: MongoDB will auto-generate an _id field.
  roleTitle: { type: String },
},
{
  collection: 'roles',
});

module.exports = mongoose.model('Role', roleSchema);

/*
============================================
; Title: Login
; Author: Tyler Armstrong, David Tarvin, Aaron Wilson
; Date: 27 October 2019
; Description: Check user login
;===========================================
*/

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/user');

  router.post("/login", (req, res, next) => {
    let thisUser;
    User.findOne({ username: req.body.username })
      .then(user => {
        if (!user) {
          return res.status(401).json({
            message: "Authentication failed"
          });
        }
        thisUser = user;
        return bcrypt.compare(req.body.password, user.password);
      })
      .then(result => {
        if (!result) {
          return res.status(401).json({
            message: "Authentication failed"
          });
        }
        // send generated web token to front-end
        res.status(200).json({
          userId: fetchedUser._id,
          name_first: fetchedUser.name_first
        });
      })
      .catch(err => {
        return res.status(401).json({
          message: "Authentication failed"
        });
      });
  });

  module.exports = router;

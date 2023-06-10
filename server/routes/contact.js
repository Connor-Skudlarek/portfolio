var express = require('express');
var router = express.Router();
var path = require('path')
const Contact = require("../models/Contact");

router.post("/", async function (req, res, next) {
    const { name, email, message } = req.body
    const newContact = new Contact({
          name,
          email,
          message,
    })
    await newContact.save();
    res.json({success: true});
});

module.exports = router;

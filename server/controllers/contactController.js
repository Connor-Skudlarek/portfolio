const Contact = require("../models/Contact");

exports.createContact = async function (req, res, next) {
    const { name, email, message } = req.body
    const newContact = new Contact({
          name,
          email,
          message,
    })
    try {
        await newContact.save();
        res.json({success: true});
    } catch {
        res.json({success: false})
    }
}
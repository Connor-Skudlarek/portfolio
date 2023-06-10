const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: String,
    email: String,
    message: String,
    submissionDate: {
        type: Date,
        default: Date.now
    },
});

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact;
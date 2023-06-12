var express = require('express');
var router = express.Router();
const contactController = require('../controllers/contactController')

router.post("/", contactController.createContact);

module.exports = router;

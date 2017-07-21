//your code below

//requirements
var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');


//all routes for /pirate
router.get('/', (req, res) => {
    data: ('pirates/index')
});
router.post('/', (req, res) => {
    data.seededPirates.push(newPirate);
    res.redirect('/pirates');
});

//exports
module.exports = router;
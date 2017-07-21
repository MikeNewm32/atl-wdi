//your code below

//requirements
var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');


//all routes for /pirate
var pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);


app.get('/', (req, res) => {
    res.send('This is our homepage');
});

//exports
module.exports = router;
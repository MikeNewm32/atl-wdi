//your code here
const express = require('express');
const hbs = require('hbs');
const app = express();
app.use(express.static(__dirname + '/public'));
app.set("view engine", "hbs");

var pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);







const port = process.env.PORT || 3000;
app.listen(port,  () => {
    console.log('pirates have landed on port ' + port);
});
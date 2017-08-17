//your code here
const express = require('express');
const hbs = require('hbs');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
app.use(logger("dev"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.set("view engine", "hbs");
app.set('views', './views');
app.use(express.static(__dirname + '/public'));

var pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);

app.get('/', (req, res) => {
    res.send("This is the homepage")
});






const port = process.env.PORT || 3000;
app.listen(port,  () => {
    console.log('pirates have landed on port ' + port);
});
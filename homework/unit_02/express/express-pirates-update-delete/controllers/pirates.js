//==============================
// REQUIREMENTS
//==============================

var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//==============================
// READ
//==============================
//for root pirate page
router.get('/', function(req, res){
	res.render("pirates/index.hbs", {
		pirates: pirates
	});
});


router.get('/new', function(req, res){
	res.render("pirates/new.hbs");
});


//this is for each pirate page
router.get('/:id', function(req, res){

	//grab the pirate by id
	var showPirate = pirates[req.params.id];

	res.render("pirates/show.hbs", {
		pirate: showPirate
	});
});


//==============================
// CREATE
//==============================
router.get('/new', (req, res) => {
  res.render('pirates/new');
})
//==============================
// UPDATE
//==============================
router.get('/:id/edit', (req, res) => {
  const showPirate = req.params.id;
  const pirates = pirates.pirates[id];
  res.render("pirates/edit", {
    name: name,
    id: id
  })
});
router.put('/:id', (req, res) => {
  // We have the ID
  const id = req.params.id;
  // Use the id to grab specific index in array
  const pirates = pirates.pirates[id];
  // Update the property values
  pirates.description = req.body.description;
  pirates.urgent = req.body.urgent;
  // redirect back to individual name
  res.method = "GET";
  res.redirect(`/pirates/${id}`);
});
router.post('/', (req, res) => {
  console.log(req.body);

  const pirates = {
    property: req.body.property

  };
  pirates.pirates.push(pirates);

  res.redirect(“/pirates”);
});

//==============================
// DESTROY
//==============================
router.delete('/:id', (req, res) => {

    pirates.pirates.splice(req.params.id, 1);

    res.method= "GET";
    res.redirect("/pirates");
});
//==============================
// EXPORTS
//==============================

module.exports = router;

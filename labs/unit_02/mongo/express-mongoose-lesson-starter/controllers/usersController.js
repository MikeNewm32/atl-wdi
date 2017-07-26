var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Item = require("../models/item");

// USERS INDEX ROUTE

router.get('/', (req, res) => {

    User.find({})
        .then((users) => {
            console.log(users[0]._id)
            res.render('users/index', {
                users: users
            });
        })
        .catch((error) => {
            console.log(`Error!!!!! ${error}`);
        });

})
// USER CREATE FORM
router.get('/new', (req, res) => {
    res.render('users/new')
})
// USER CREATE ROUTE
router.post('/', (req, res) => {
    const newUser = new User(req.body);
    response.send(newUser);
})

// USER SHOW ROUTE

router.get('/:id', (req, res) => {

    const userId

    User.findById(req.params.id)
    .then((user) => {
        res.render('users/show', {
            user: user
        })
    })
})





// USER UPDATE ROUTE

// USER DESTROY
router.delete('/:id/delete', (req, res) => {
    const userIdToDelete = req.params.id;
    User.findByIdAndRemove(userIdToDelete)
    .then(() => {
        console.log(`Successfully deleted user with ID ${userIdToDelete}!`)
        response.redirected('/users');
    })
});
// ADD A NEW ITEM

// REMOVE AN ITEM

module.exports = router;

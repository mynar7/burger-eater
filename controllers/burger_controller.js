const express = require('express');
const burger = require('../models/burger.js');

let router = express.Router();

router.get('/', function(req, res) {
    burger.all(function(data){
        let hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post('/api/new', function(req, res) {
    //console.log(req.body.burgerName);
    let name = req.body.burgerName;
    if(name) {
        burger.create(name, function(data){
            res.redirect('/');
        });
    }
    
});

router.post('/api/eat', function(req, res) {
    let id = req.body.id;
    burger.update(id, function(data){
        res.json(200);
    });
});

module.exports = router;
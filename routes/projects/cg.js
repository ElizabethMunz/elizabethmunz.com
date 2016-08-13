/**
 * Created by Elizabeth on 8/9/2016.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('projects/cg', { title: 'Project - Crossing Guard' });
});

module.exports = router;

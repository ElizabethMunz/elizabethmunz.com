/**
 * Created by Elizabeth on 8/6/2016.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('projects', {
        title: 'Projects',
        path: req.originalUrl
    });
});

module.exports = router;

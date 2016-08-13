/**
 * Created by Elizabeth on 8/9/2016.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    var url = req.originalUrl;
    var slash = url.lastIndexOf("/");
    url = url.substring(0,slash);

    res.render('projects/cg', {
        title: 'Project - Crossing Guard',
        path: url
    });
});

module.exports = router;

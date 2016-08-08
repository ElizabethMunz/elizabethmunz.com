/**
 * Created by Elizabeth on 8/6/2016.
 */
var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');
//var xoauth2 = require('xoauth2');



/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('contact', {
        title: 'Contact',
        sent: 0
    });
});



router.post('/', function(req, res, next) {

    var transporter = nodemailer.createTransport('smtps://elizabethmunz.com@gmail.com:XXXXXXX@smtp.gmail.com');

    //Content of email
    var mailBody = {
        from: req.body.email,
        to: "tuf46005@temple.edu",
        subject: "" + req.body.subject,
        text: "From: \n" + req.body.email + "\n\nBody: \n" + req.body.body
    };

    transporter.sendMail(mailBody, function (error, response) {
        //Email not sent
        if (error) {
            console.log("Email not sent: " + error);
            res.render('contact', {
                title: 'Contact',
                sent: 2
            });
        }
        //Email sent
        else {
            res.render('contact', {
                title: 'Contact',
                sent: 1
            });
        }
    });

});


module.exports = router;

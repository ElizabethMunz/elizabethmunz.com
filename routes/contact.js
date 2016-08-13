/**
 * Created by Elizabeth on 8/6/2016.
 */
var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');

var login = require('./../login.json');



/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('contact', {
        title: 'Contact',
        sent: 0,
        error: "",
        messageBody: {}
    });
});



router.post('/', function(req, res, next) {

    //TODO: Add regex check to make sure it's a real email address in email field
    var emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!emailRegex.test(req.body.email.trim())) {
        res.render('contact', {
            title: 'Contact',
            sent: 2,
            error: "Please enter a valid email address so I can respond to your message!",
            messageBody: {email: req.body.email, subject: req.body.subject, text: req.body.text}
        });
    }
    else {
        var transporter = nodemailer.createTransport('smtps://' + login.user + '@gmail.com:' + login.pass + '@smtp.gmail.com');

        //Content of email
        var mailBody = {
            from: req.body.email,
            to: "tuf46005@temple.edu",
            subject: "" + req.body.subject,
            text: "From: \n" + req.body.email + "\n\nBody: \n" + req.body.text
        };

        //Send message
        transporter.sendMail(mailBody, function (error, response) {
            //Email not sent
            if (error) {
                console.log("Email not sent: " + error);
                res.render('contact', {
                    title: 'Contact',
                    sent: 2,
                    error: "Please try again later.",
                    messageBody: {}
                });
            }
            //Email sent
            else {
                res.render('contact', {
                    title: 'Contact',
                    sent: 1,
                    error: "",
                    messageBody: {}
                });
            }
        });
    }
});


module.exports = router;

const express = require('express');
const mongoose = require('mongoose');
const hbs = require('hbs');
const app = express();

app.use(express.json());
app.set('view engine', 'hbs');

app.post('/userSubmission', function(req, res) {
    console.log("hi there");
})

app.get('/doctor', function(req, res) {
    res.render('doctor.hbs')
})

app.get('/userSubmission', function(req, res) {
    res.render('userProfile.hbs');
})

app.get('/docDetails', function(req, res) {
    res.render('docDetails.hbs');
})

app.get('/homePage', function(req, res) {
    res.render('homePage.hbs');
})

app.listen(3000, function(req, res) {
    console.log("http://localhost:3000")
});
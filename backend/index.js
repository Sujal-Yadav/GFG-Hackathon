const express = require('express');
const hbs = require('hbs');
const app = express();

app.use(express.json());
app.set('view engine', 'hbs');
// app.set('views', 'frontend/views/userProfile.hbs')

app.post('/userSubmission', function(req, res) {
    console.log("hi there");
})

app.get('/userSubmission', function(req, res) {
    res.render('userProfile.hbs');
})

app.get('/docDetails', function(req, res) {
    res.render('docDetails.hbs');
})

app.listen(3000, function(req, res) {
    console.log("http://localhost:3000")
});
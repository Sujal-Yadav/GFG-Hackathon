const mongoose = require('mongoose');

mongoose.connect('')

const docDetls = mongoose.Schema({
    userEmail: String,
    firstname: String,
    lastname: String,
    email: String,
    address: String,
    city: String,
    state: String,
    pincode: Number,
    about: String
})

const docInfo = mongoose.model('docInfo', docDetls)

module.exports = {
    docInfo
}
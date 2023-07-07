const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: String,
    password: String,
    userName:String,
    profileUrl:String
})

const User = mongoose.model('User', userSchema)

module.exports = User
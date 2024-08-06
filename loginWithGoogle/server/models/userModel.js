const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true,
        default: ''
    },
    email: {
        type: String,
        // required: true,
        // unique: true,
        default: ''

    },
    password: {
        type: String,
        // required: true,
        default: ''

    },
    googleId : String,
    displayName: String,
    image: String
},{timestamps:true});

const User = mongoose.model('User', userSchema);

module.exports = User;

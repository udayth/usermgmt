const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: true
    },
    birthdaydmy: {
        type: String,
        required: false
    },
    birthdaymdy: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    creditcard: {
        type: String,
        required: true
    },
    ccexp: {
        type: String,
        required: true
    },
    ccpin: {
        type: Number,
        required: true
    },
    ccsecurity: {
        type: Number,
        required: true
    },
    photo: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = User = mongoose.model("users", UserSchema);
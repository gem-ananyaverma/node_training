const mongoose = require("mongoose");

let schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false
    },
    team: {
        type: String,
        required: true
    }
});

let Employees = module.exports = mongoose.model("Employee", schema);
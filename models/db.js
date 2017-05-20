const mongoose = require('mongoose');

var schema = mongoose.Schema;

var dbSchema = new schema({
    "name": String,
    "email": String,
    "num": String
});

const modelClass = mongoose.model('contact', dbSchema)
module.exports = modelClass ;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: {type: String, required: true},
    location: {type: String, required: true},
    description: {type: String, required: true},
    logo: {type: String, required: true, unique: true},
    bussDomain: {type: string, required: true}
});

module.exports = mongoose.model('Company', schema);
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    type: {type: String, required: true},
    make: {type: String, required: true},
    model: {type: String, required: true},
    barcode: {type: String, required: true, unique: true},
    description: {type: Schema.Types.Date, required: true},
    state: {type: string, required: true},
    company: {type: Schema.Types.ObjectId, ref: 'Company'},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Resource', schema);
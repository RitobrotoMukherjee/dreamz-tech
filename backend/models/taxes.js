// Get Schema and model from Mongoose package
const { Schema, model } = require('mongoose');

const TaxSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    administrative_type: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
        max: [10, 'Only 100 characters allowed for location']
    },
    taxes: {
        type: String,
        required: true
    },
    property: {
        type: String
    },
    land: {
        type: String
    }
});

/* 
 * Bind Schema and Model
 * Exporting the created model
*/
module.exports = model('taxes', TaxSchema);

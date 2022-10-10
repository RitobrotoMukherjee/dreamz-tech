// Get Schema and model from Mongoose package

const { Schema, model } = require('mongoose');

const StateSchema = new Schema({
    name: {
        type: String,
        required: true,
        match: /[a-zA-Z ]/g
    }
});

/* 
 * Bind Schema and Model
 * Exporting the created model
*/
module.exports = model('states', StateSchema);

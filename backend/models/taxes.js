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

});

// Used to check if a valid array of tax
const TaxArray = new Schema({
    taxes: {
        type: [TaxSchema],
        validate: {
            validator: v => Array.isArray(v) && v.length > 0,
            message: props => `${props.value} is not a valid array of Taxes`
        }
    }
});

/* 
 * Bind Schema and Model
 * Exporting the created model
*/
module.exports = {
    TaxModel: model('taxes', TaxSchema),
    TaxArray: model('taxarray', TaxArray)
}

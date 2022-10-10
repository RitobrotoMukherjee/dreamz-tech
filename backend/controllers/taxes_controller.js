const { ERROR_RESPONSE, SUCCESS_RESPONSE } = require('../utils/response_helper');
const { TaxModel, TaxArray } = require('../models/taxes');

const GetAllTaxes = (_, resp) => {
    TaxModel.find({}, (error, data) => {
        if(error) return resp.status(500).send({
            ...ERROR_RESPONSE, msg: 'Error getting Taxes data',
            details: error.message
        });
        resp.status(200).send({
            ...SUCCESS_RESPONSE, data
        });
    }).sort({ createdAt: -1 });
}

const AddMultipleTaxes = async (req, resp) => {
    const { taxes } = req.body;
    
    // Create TaxArray model instance for validation
    const validation = new TaxArray({taxes});
    // Validate TaxArray with schema 
    const errors = validation.validateSync();
    // send back error response
    if(errors) {
        return resp.status(400).send({ ...ERROR_RESPONSE, msg: errors.message});
    }
    // Save array of data with TaxModel, await is required as the return value is a promise
    const data = await TaxModel.insertMany(taxes);
    resp.status(200).send({ ...SUCCESS_RESPONSE, data, msg: "Data Created" })
}

module.exports = { GetAllTaxes, AddMultipleTaxes };

const { ERROR_RESPONSE, SUCCESS_RESPONSE } = require('../utils/response_helper');
const TaxModel = require('../models/taxes');

const GetAllTaxes = (_, resp) => {
    TaxModel.find({}, (error, data) => {
        if(error) return resp.status(500).send({
            ...ERROR_RESPONSE, msg: 'Error getting Taxes data',
            details: error.message
        });
        resp.status(200).send({
            ...SUCCESS_RESPONSE, data
        });
    });
}

const AddMultipleTaxes = (req, resp) => {

}

module.exports = { GetAllTaxes, AddMultipleTaxes };

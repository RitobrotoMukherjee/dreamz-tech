const SchemaModel = require('../models/states');
const { ERROR_RESPONSE, SUCCESS_RESPONSE } = require('../utils/response_helper');
// 

// Get list of state data
const GetAllStates = (_, resp) => {
    SchemaModel.find({}, '-_id', (error, data) => {
        if(error) return resp.status(500).send({
            ...ERROR_RESPONSE, msg: 'Error getting states data',
            details: error.message
        });
        resp.status(200).send({
            ...SUCCESS_RESPONSE, data
        });
    });
}

module.exports = { GetAllStates };

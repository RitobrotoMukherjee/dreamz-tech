const { ERROR_RESPONSE } = require('../utils/response_helper');

/**
 * 
 * @param {http request} req 
 * @param {http response} resp 
 * @param {function} next 
 * 
 * Checks if an array of object is sent 
 */

const ValidateMultipleAddRequest = (req, resp, next) => {
    try{
        const { taxes } = req.body;

        if(!taxes.isArray) {
            return resp.status(400).send({
                ...ERROR_RESPONSE, msg: 'Bad Request',
                details: 'Array of taxes required in request body'
            });
        }
        next();

    }catch(e) {
        return resp.status(400).send({
            ...ERROR_RESPONSE, msg: 'Bad Request',
            details: 'POST request body not sent properly, please check your request.'
        });
    }
}

module.exports = { ValidateMultipleAddRequest };

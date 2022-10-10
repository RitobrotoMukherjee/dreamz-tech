/**
 * Define all response object to make immutable
 * All response structure will be same
 */

const ERROR_RESPONSE = {
    error: true, msg: 'Error', details: ''
}

const SUCCESS_RESPONSE = {
    success: true, data: [], statusCode: 200
}

module.exports = { 
    ERROR_RESPONSE, SUCCESS_RESPONSE
}

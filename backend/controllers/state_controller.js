// Get list of state data
const GetAllStates = (_, resp) => {
    resp.send('State List');
}

module.exports = { GetAllStates };

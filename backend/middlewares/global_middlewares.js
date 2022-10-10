const NotFoundRoute = (req, resp) => {
  // Not Found Route with error handling
  try {
    const { path, method } = req;
    return resp.status(404).send({
      error: true,
      msg: 'Path Not Found',
      details: `PATH: ${path}, METHOD: ${method}`,
    });
  } catch (e) {
    return resp.send(500).send({
      error: true,
      msg: 'Internal Server Error while Routing request',
      details: e.message,
    });
  }
};

// exporting named route in case later more global routes are added
module.exports = { NotFoundRoute };

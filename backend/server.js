// Setting up server
const express = require('express');

// Getting middlewares
const { NotFoundRoute } = require('./middlewares/global_middlewares');

// Main App
const app = express();

// Specify global middlewares

// For getting POST and PATCH request body as JSON
app.use(express.json());

app.get('/', (req, resp) => {
    resp.status(200).send({ msg: "Hello World" });
});

// Set-up not found Route
app.use(NotFoundRoute);

module.exports = app;

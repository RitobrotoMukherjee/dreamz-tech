// Setting up server
const express = require('express');
const ROUTES = require('./routes/routes');

// Getting middlewares
const { NotFoundRoute } = require('./middlewares/global_middlewares');

// Main App
const app = express();

// Specify global middlewares

// For getting POST and PATCH request body as JSON
app.use(express.json());

// set up proper routes for api
app.use('/api/v1', ROUTES);

// Set-up not found Route handler
app.use(NotFoundRoute);

module.exports = app;

// Invoke dotenv to manage environment variables in central place .env
require('dotenv').config();

// Using Mongoose for interacting with MongoDB
const mongoose = require('mongoose');

// Import main APP
const APP = require('./server');

// Set up DB connection with error handlling
mongoose.connect(process.env.MONGO_DB_URI)
  .then(() => {
    APP.listen(process.env.PORT, () => {
      console.warn(`Listening to APP: Root URL: http://localhost:${process.env.PORT}`);
    });
  }).catch(e => {
    throw new Error(`MongoDB Connection: ${e.message}`);
  });

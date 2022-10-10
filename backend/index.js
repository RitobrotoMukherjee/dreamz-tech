// Invoke dotenv to manage environment variables in central place .env
require('dotenv').config();

// Import main APP
const APP = require('./server');

APP.listen(process.env.PORT, () => {
  console.log(`Listening to APP: Root URL: http://localhost:${process.env.PORT}`);
});

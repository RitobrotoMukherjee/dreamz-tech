const express = require('express');
const { GetAllStates } = require('../controllers/state_controller');

// create router
const router = express.Router();

// state list
router.get('/states', GetAllStates);

// Taxes List
router.get('/taxes', (req, resp) => {
  resp.status(200).send({ msg: 'Taxes List' });
});

// Save Taxes Multiple
router.post('/taxes', (req, resp) => {
  resp.status(200).send({ msg: 'Save taxes' });
});

module.exports = router;

const express = require('express');
const { GetAllStates } = require('../controllers/state_controller');
const { GetAllTaxes, AddMultipleTaxes } = require('../controllers/taxes_controller');

// create router
const router = express.Router();

// state list
router.get('/states', GetAllStates);

// Taxes List
router.get('/taxes', GetAllTaxes);

// Save Multiple Taxes
router.post('/taxes', GetAllTaxes);

module.exports = router;

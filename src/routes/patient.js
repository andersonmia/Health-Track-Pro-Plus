const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

// Create a new patient
router.post('/', patientController.create);

// Retrieve all patients
router.get('/', patientController.getAll);

// Retrieve a single patient by ID
router.get('/:id', patientController.getById);

// Update a patient by ID
router.put('/:id', patientController.update);

// Delete a patient by ID
router.delete('/:id', patientController.delete);

module.exports = router;

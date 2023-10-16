const { sequelize } = require('../models/db');
const Patient = require('../models/patientModel');

// Create a new patient
exports.create = async (req, res) => {
  try {
    const { name, heartRate, temperature, frequentIllness } = req.body;
    const patient = await Patient.create({ name, heartRate, temperature, frequentIllness });
    res.status(201).json(patient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating a patient' });
  }
};

// Retrieve all patients
exports.getAll = async (req, res) => {
  try {
    const patients = await Patient.findAll();
    res.status(200).json(patients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving patients' });
  }
};

// Retrieve a single patient by ID
exports.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const patient = await Patient.findByPk(id);
    if (patient) {
      res.status(200).json(patient);
    } else {
      res.status(404).json({ message: 'Patient not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving a patient' });
  }
};

// Update a patient by ID
exports.update = async (req, res) => {
  const { id } = req.params;
  const { name, heartRate, temperature, frequentIllness } = req.body;
  try {
    const patient = await Patient.findByPk(id);
    if (patient) {
      patient.name = name;
      patient.heartRate = heartRate;
      patient.temperature = temperature;
      patient.frequentIllness = frequentIllness;
      await   patient.save();
      res.status(200).json(patient);
    } else {
      res.status(404).json({ message: 'Patient not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating a patient' });
  }
};

// Delete a patient by ID
exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const patient = await Patient.findByPk(id);
    if (patient) {
      await patient.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Patient not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting a patient' });
  }
};

const { DataTypes } = require('sequelize');
const sequelize = require('./db'); // Import the database connection

const Patient = sequelize.define('Patient', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  patientId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  heartRate: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  temperature: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  frequentIllness: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Patient;

const { Sequelize } = require('sequelize');
const path = require('path');

// Specify the path to your SQLite database file within your project directory
const dbPath = path.join(__dirname, 'data', 'healthtrack.db');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath, // Path to your SQLite database file
});

async function connectToDatabase() {
    try {
      await sequelize.authenticate();
      console.log('Connection to the database has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
  
  connectToDatabase();
module.exports = sequelize;

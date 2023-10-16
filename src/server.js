const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./models/db');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const dotenv = require('dotenv');
const Patient = require('./models/patientModel');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(morgan('combined'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Request validation middleware
app.use((req, res, next) => {
  // Implement validation logic here
  next();
});

app.use('/api/patient', require('./routes/patient'));
app.use((req, res, next) => {
  // Implement authentication and authorization logic here
  next();
});

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(port, () => {
      console.log(`HealthTrack Pro Plus is running on port ${port}`);
    });
  } catch (error) {
    console.error('Server startup error:', error);
  }
})();

'use strict';

// Requiring necessary modules
const fs = require('fs'); // For file system operations
const path = require('path'); // To handle file paths
const Sequelize = require('sequelize'); // Sequelize for ORM
const process = require('process'); // To access environment variables
const basename = path.basename(__filename); // Getting the name of this file
const env = process.env.NODE_ENV || 'development'; // Setting the environment (development by default)
const config = require(__dirname + '/../config/config.json')[env]; // Getting the config for the current environment
const db = {}; // This object will hold our models

let sequelize;
if (config.use_env_variable) {
  // If the config specifies an environment variable for the DB connection, use it
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  // Otherwise, use the details provided in the config file
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    // Filtering the files: Exclude this file, non-JS files, and test files
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    // For each model file...
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model; // Adding the model to our db object
  });

Object.keys(db).forEach(modelName => {
  // Setting up associations if they exist
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize; // Adding sequelize instance to the db object
db.Sequelize = Sequelize; // Adding Sequelize class to the db object

module.exports = db; // Exporting the db object with all models and sequelize setup

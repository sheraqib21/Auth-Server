// config/db.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const connectDB = async () => {
  try {
    // Mongoose connects to the MongoDB URI without deprecated options
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected `);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Stop the server on DB connection failure
  }
};

module.exports = connectDB;

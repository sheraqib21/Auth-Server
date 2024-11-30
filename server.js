// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json()); // Parses incoming JSON requests
app.use(cors()); // Enable cross-origin resource sharing

// Connect to MongoDB Atlas
connectDB();

// Basic test route
app.get('/', (req, res) => {
  res.send('MongoDB connected and Auth server running');
});

// Set up your routes here
// app.use('/api/auth', require('./routes/authRoutes'));

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

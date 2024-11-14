require('dotenv').config(); 
const express = require('express'); 
const cors = require('cors'); 
const authRoutes = require('./routes/auth'); 
const documentosRoutes = require('./routes/documentos'); 
const mongoose = require('mongoose'); 
const dotenv = require('dotenv'); 

// Load environment variables
dotenv.config(); 

// Get MongoDB URI from environment variables
const dbURI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); 
app.use(express.json()); 

// Routes
app.use('/auth', authRoutes); 
app.use('/api', documentosRoutes); 

// Start the server
app.listen(5001, () => { 
  console.log('Server running on port 5001'); 
});

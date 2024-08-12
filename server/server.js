require('dotenv').config() // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/database');
const cors = require('cors');

const userRoutes = require('./routes/user');
const communityRoutes = require('./routes/community');
const postRoutes = require('./routes/post');

const app = express();

app.use(cors({
  origin: 'https://community-front-red.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/user', userRoutes);
app.use('/api/community', communityRoutes);
app.use('/api/post', postRoutes);

connectDB();

app.get('/', (req, res) => res.send('API is running'));

// Export the app for Vercel
module.exports = app;
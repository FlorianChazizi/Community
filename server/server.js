require('dotenv').config() // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/database');
const cors = require('cors');

// routes imports 
const userRoutes = require('./routes/user'); 
const communityRoutes = require('./routes/community'); 
const postRoutes = require('./routes/post')

const app = express();
app.use(cors());

app.use(express.json());

// path & method middleware
app.use(( req, res, next) => {
  console.log( req.path, req.method )
  next();
})

//routes
app.use('/api/user', userRoutes);
app.use('/api/community', communityRoutes);
app.use('/api/post', postRoutes)

// Connect to the database
connectDB();

// listen for requests
app.listen(process.env.PORT, () => {
  console.log('connected to db & listening on port', process.env.PORT)
})
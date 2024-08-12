const mongoose = require('mongoose');

// connect to db
const connectDB = async () => 
  {
    mongoose.connect(process.env.MONGO_URI)
    console.log('connected in database.')
  };
  module.exports = connectDB;
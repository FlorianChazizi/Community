const mongoose = require('mongoose');

//database config
const connectDB = async () => 
  {
    mongoose.connect(process.env.MONGO_URI)
    console.log('connected in database.')
  };
  module.exports = connectDB;
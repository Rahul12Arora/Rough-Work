const mongoose = require('mongoose');

// Define the schema for the User collection
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  mobile: {
    type: String,
    required: true,
    unique: true
  },
  fullname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  completionDate:{
    type: Date,
  }
});

// Create the User model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
const mongoose = require("mongoose"); //importing mongoose module
require('dotenv').config();

const mongoURL = process.env.MONGO_URL;

const connectDB = async ()=>{
  try{
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
console.log('Connected to MongoDB');
  }
  catch(error) {
    console.log('Error connecting to MongoDB:', error);
  }
}
module.exports = connectDB;
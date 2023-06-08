const express =  require('express');
const app = express();
const connectDB = require('./mongodb');
const dotenv = require('dotenv').config()
const port = process.env.PORT;        
const url = process.env.MONGO_URL;        
app.use(express.json())              //middleware to convert chunks data to json format; to avoid data+=chunk in node
app.use(express.urlencoded({extended: true}));
const User = require('./models/userSchema');

connectDB()

// Handle GET request to fetch all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Handle POST request to create a new user
app.post('/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(port || 5002,()=>{
  console.log('server started on port', port)
});
// app.listen(5001);
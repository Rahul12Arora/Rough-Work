const express =  require('express');
const app = express();
const connectDB = require('./mongodb');
const dotenv = require('dotenv').config()
const port = process.env.PORT;        
const url = process.env.MONGO_URL;        
app.use(express.json())              //middleware to convert chunks data to json format; to avoid data+=chunk in node
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res)=>{
    res.send(todoarr);
})

const arr = [];

app.post('/', (req, res)=>{
    // const {recieved} = req.body;
    // console.log(recieved)
    // todoarr.push(recieved);
    // res.send(todoarr);
    // res.json({todos: todoarr[0]});
    // res.send('port is alive & working for post');

    let data = '';
  req.on('data', chunk => {
    data += chunk.toString();
  });
  req.on('end', () => {
    console.log(data);
    todoarr.push(data)
    res.send(todoarr);
  });

})

connectDB()
app.listen(port || 5002,()=>{
  console.log('server started on port', port)
});
// app.listen(5001);
const express =  require('express');
const app = express();
const dotenv = require('dotenv').config()
const port = process.env.PORT;        
app.use(express.json())              //middleware to convert chunks data to json format; to avoid data+=chunk in node
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    res.send(todoarr);

})
const todoarr = [];

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

app.listen(port || 5002);
// app.listen(5001);
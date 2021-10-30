const express       = require('express'), 
      dbOperation   = require('./dbOperation'),  
      cors          = require('cors'),
      morgan        = require('morgan');

const API_PORT = process.env.PORT || 5000; 
const app = express(); 

// defining some varaibales for mongoDB 
let client; 
let session; 
app.use(cors()); 
app.use(morgan('dev')); app.use(morgan('tiny')); 
app.use(express.json()); 
app.use(express.urlencoded());


app.post('/api', async (req, res) => { 
    console.log('called'); 
    const result = await dbOperation.getEmployees(req.body.name);
    res.send(result.recordset); 
}); 

app.post('/hello', async (req, res) => { 
    await dbOperation.createEmployees(req.body);
    const result = await dbOperation.getEmployees(req.body.Firstname);
    console.log('called'); 
    res.send(result.recordset); 
}); 

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`)); 
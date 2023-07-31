const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Router = require('./routes');
const dotenv = require('dotenv');

const app = express();
app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/jobportal', { useNewUrlParser: true, useUnifiedTopology: true })

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


// app.routes('/',(req,res)=>{
//     res.send('test')
// })
app.use(Router);

const PORT = 8000;
dotenv.config();



app.listen(PORT, () => {
    console.log('App is running on port: ' + PORT);
})
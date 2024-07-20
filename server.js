const express = require('express');
const bodyparser = require('body-parser');
require('dotenv').config;
const routeAPI = require('./routes/api');
const mongoDB = require('./config/db');

const app = express();
port = 5005;

app.use(express.json());
app.use(bodyparser.json());
 
mongoDB.connectDB();

app.use('/api',routeAPI)

app.listen(port,() => console.log("Server started at..",port));

 
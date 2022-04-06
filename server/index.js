//Dependencies
const express = require('express');
const bodyParser = require('body-parser');

//Configure enviorement variables 
require("dotenv").config();
const port = process.env.PORT || 3000;

//Import routes
const router = require('./src/routes');

//import db
const db = require('./src/core/db');

//import middleware
const { boomError, internalError } = require('./src/core/middlewares/error.handler');



//Init app
const app = express();

//set body parser
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

//Set Api endpoint
app.use('/api', router);

//set middlewares
app.use(boomError);
app.use(internalError);

db.connect()
.then(client => console.log("client"))
.catch(err => console.error(err));

//List to port
app.listen(port, () =>{
    console.log(`app is listening to port: ${port}`);
})



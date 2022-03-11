//Dependencies
const express = require('express');

//Import routes
const router = require('./src/routes');

//Configure enviorement variables 
require("dotenv").config();
const port = process.env.PORT || 3000;

//Init app
const app = express();

//Set Api endpoint
app.use('/api', router);

//List to port
app.listen(port, () =>{
    console.log(`app is listening to port: ${port}`);
})



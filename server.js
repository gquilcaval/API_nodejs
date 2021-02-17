
// ------ IMPORT servidor
const express = require('express');

//import models
require('./src/models/models')

//import asociations
require('./asociations')

// INSTANCIA 
const app = express();
require('./db')





module.exports = app
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const {passport}=require('./config/passport');

require('dotenv').config();

//Parses incoming data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Allows cross-origin resource sharing
app.use(cors());

//Passport configuration
app.use(passport.initialize());

//Allows use of routes
app.use(require('./routes'));

//Error handling middleware
app.use(require('./middleware/error_handling'));

//Request logging
app.use(morgan(':method :url :status :response-time ms - :res[content-length]'));


module.exports = app;
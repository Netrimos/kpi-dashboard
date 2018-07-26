const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();
require('./routes/authRoutes')(app);


//Heroku Porting with condition for development
const PORT = process.env.PORT || 5000;
app.listen(PORT);

//Development porting
//app.listen(5000);
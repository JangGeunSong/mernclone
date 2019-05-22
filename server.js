const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const articles = require('./routes/api/articles');
// API linked in the articles const

const app = express();
// Main server application is app

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/articles', articles);

const port = process.env.PORT || 5500;

app.listen(port, () => console.log(`Server started on port ${port}`));

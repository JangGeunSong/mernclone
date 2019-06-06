const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { ApolloServer, gql } = require('apollo-server-express')

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


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Use Routes
app.use('/api/articles', articles);

let typeDefs = gql`
    type Query {
        hello: String,
        name: String,
        age: Int
    }

    schema {
        query: Query
    }
`

let resolvers = {
    Query: {
        hello(root) {
            return 'Hello world!!'
        },
        name(root) {
            return 'Micheal'
        },
        age(root) {
            return 25
        }
    }
}

const apServer = new ApolloServer({ typeDefs, resolvers })
const path = '/graphql'

apServer.applyMiddleware({ app, path })

const port = process.env.PORT || 5500;

app.listen(port, () => console.log(`Server started on port ${port}`));

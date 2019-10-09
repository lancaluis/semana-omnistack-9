const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

// inicia o express
const app = express();

// config do MongoDB
mongoose.connect('mongodb+srv://user:password@omnistack-hak04.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// ler formato JSON
app.use(express.json());

// inicia as rotas
app.use(routes);

// porta utilizada
app.listen(3333);
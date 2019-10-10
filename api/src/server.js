const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

// inicia o express
const app = express();

// config do MongoDB
mongoose.connect('mongodb+srv://llanca:G@fanhoto86@omnistack-hak04.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// Permite acesso a api
app.use(cors());

// ler formato JSON
app.use(express.json());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

// inicia as rotas
app.use(routes);

// porta utilizada
app.listen(3333);
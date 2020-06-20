// Importando o express
const express = require('express');
const app = express();
const porta = 8080;

const bodyParser = require('body-parser');

// Características dos botões
const data = require('./dados.json');

// Provendo os elementos estáticos
app.use(express.static('.'));
app.use(bodyParser.json());

app.get('/saindoDaPagina', (req, res) => {
    res.send(data);
})

app.listen(porta, () => console.log(`Executando na porta ${porta}`));
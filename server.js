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

function createUser(username, nome, senha) {
    
}

app.get('/saindoDaPagina', (req, res) => {
    res.send(data);
})

app.post('/signUp', (req, res) => {
    if (!req.body.params.username || !req.body.params.password || !req.body.params.cPassword) {
        res.send('Campos não preenchidos!');
    } else {
        console.log('teste1');
    }
})

app.listen(porta, () => console.log(`Executando na porta ${porta}`));
// Importando o express
const express = require('express');
const app = express();
const porta = 8080;

const bodyParser = require('body-parser');

// Características dos botões
const data = require('./dados.json');
let users = new Array();

// Provendo os elementos estáticos
app.use(express.static('.'));
app.use(bodyParser.json());

function createUser(username, senha) {
    return user = {
        username,
        senha
    }
}

app.get('/saindoDaPagina', (req, res) => {
    res.send(data);
})

app.post('/signUp', (req, res) => {
    if (!req.body.params.username || !req.body.params.password || !req.body.params.cPassword) {
        res.send('100');
    } else {
        if (req.body.params.password != req.body.params.cPassword) {
            res.send('200');
        } else {
            for (let x = 0; x < users.length; x++) {
                if (req.body.params.username == users[x].username) {
                    return res.send('300');
                }
            }
            users.push(new createUser(req.body.params.username, req.body.params.password));
            res.send('400');
            console.log(users);
        }
    }
})

app.listen(porta, () => console.log(`Executando na porta ${porta}`));
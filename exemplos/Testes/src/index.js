const express = require('express');
const app = express();

const aluno = require('./controllers/aluno_controller');

aluno(app)

app.get('/', (req, res) => {
    res.send('Rota principal')
});



app.get('/facilitador', (req, res) => {
    res.send('Rota facilitador')
});

app.get('/sucesso', (req, res) => {
    res.send('Rota sucesso do estudante')
});


app.listen(3333, ()=>{ console.log("RODANDO NA PORTA 3333");})
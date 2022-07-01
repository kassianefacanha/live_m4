const express = require('express');
const app = express();

app.use(express.json())
//ENTIDADE LIVROS
const bdSQLite = require('./infra/sqlite')

const livros = require('./controllers/livros-controller');
livros(app, bdSQLite);


app.listen(3333, ()=>{ console.log('RODANDO NA PORTA 3333')})
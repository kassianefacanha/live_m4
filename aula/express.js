// import express from 'express';
const express = require('express');
const app = express();

app.get('/cadastro', function(req, res){
    res.send("aqui é a rota de cadastro")
})

app.get('/alunos', function(req, res){
    res.send("aqui é a rota de aluno")
})
app.get('/facilitadores', function(req, res){
    res.send("aqui é a rota de facilitadores")
})

app.listen(3333)
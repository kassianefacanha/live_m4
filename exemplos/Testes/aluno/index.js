// import express from 'express';
const express = require('express');
const app = express();
//midware
app.use(express.json());



// ENTIDADES:  aluno, facilitador, empregabilidade, parceiros
const aluno = require('./controllers/aluno-controller'); // importar a função aluno
aluno(app); //chamei a função passando app
const facilitador = require('./controllers/facilitador-controller'); // importar a função aluno
facilitador(app); //chamei a função passando app

// const {msg} = require('./controllers/aluno-controller')
// console.log(msg);
app.listen(3333,()=>{
    console.log("RODANDO SERVIDOR NA PORTA 3333");
})
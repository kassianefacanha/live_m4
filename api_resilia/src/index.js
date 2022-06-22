// import express from 'express';
const express = require('express');
const app = express();

//middelwares
app.use(express.json());

// ENTIDADES:  aluno, facilitador, empregabilidade, parceiros
const aluno = require('./controllers/aluno-controller'); // importar a função aluno
const facilitador = require('./controllers/facilitador-controller'); // importar a função aluno


aluno(app); //chamei a função passando app
facilitador(app); //chamei a função passando app


// //teste
// const Aluno = require('./models/aluno-model')
// const NovoAluno = new Aluno('KASSIANE', 'kassikaka@hotmail.com', '12345');
// const NovoAluno2 = new Aluno('KASSIANE', 'kassikaka@hotmail.com', '12345');
// console.log(NovoAluno)
// console.log(NovoAluno2)


// const {msg} = require('./controllers/aluno-controller')
// console.log(msg);
app.listen(3333,()=>{
    console.log("RODANDO SERVIDOR NA PORTA 3333");
})


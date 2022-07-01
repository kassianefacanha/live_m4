const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/infra/database.db');

const CREATE = `
CREATE TABLE IF NOT EXISTS "LIVROS"(
"id" INTEGER PRIMARY KEY AUTOINCREMENT,
"title" varchar(64),
"descricao" varchar(64),
"editora" varchar(64)
);`;

const INSERT = `INSERT INTO LIVROS (id, title, descricao, editora) 
VALUES (1, 'herry potter', 'livro magico', 'raipe')`;


function create(){
    db.run(CREATE,(error) => {
        if(error) console.log('erro ao criar tabela', error)
    })
}

function insert(){
    db.run(INSERT ,(error) => {
     if(error) console.log('erro ao inserir tabela', error)
})
}

db.serialize(()=> {
  create();
  insert();
})
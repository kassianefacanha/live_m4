const bd = require('../infra/bd');
const Aluno  = require('../models/aluno-model');


const aluno = (app)=>{
    app.get('/aluno', (req, res) => {
        res.send({"MEUBANDOALUNO:": bd.aluno});
    })
    app.post('/aluno', (req, res) => {
        const NovoAluno = new Aluno(req.body.nome, req.body.email, req.body.senha);
        bd.aluno.push(NovoAluno);
        res.send({ "NovoAluno": NovoAluno });
    })
}

module.exports = aluno; //exportando a função





// module.exports = Obejto = {
//     msg:"isso é um objeto"
// };

// function soma(a,b){
//     return a + b
// }
// module.exports = soma;

// module.exports = kassiane = 'kassiane loopes '
// const bd = require('../infra/bd');
const Aluno  = require('../models/aluno-model');
const bdSQLite = require('../infra/sqlite-db')
const AlunoDao = require('../DAO/aluno_dao')

const aluno = (app) =>{
  // instanciando o objeto de acesso aos dados
 const DadosDAO = new AlunoDao(bdSQLite)


    app.get('/aluno', (req, res) => {
        DadosDAO.listarAluno()
        .then((resultado) => {
          res.json(resultado)})
        .catch((err) => {res.send(err)})
      

    })
    app.post('/aluno',(req, res) => {
      const body = req.body;
      const NovoUsuario = new Aluno(body.nome, body.email, body.senha)
      DadosDAO.insereUsuario(NovoUsuario)
      .then((result) => {
        res.send("inserido com sucesso");
      }).catch((err) => {
          res.send(err);
        })     
      }) 

        app.get('/aluno/:id', (req, res) => {
        const id = req.params.id;
        DadosDAO.listarUsuariosID(id)
        .then((result) => {
          res.send(result);
        }).catch((err) => {
          res.send(err);
          })
       
        })
        app.put('/aluno/:id', (req, res) => {
     
        const body = req.body
        const id = req.params.id;

              const usuarios = DadosDAO.listarUsuariosID(id);
              const DadoNovoAluno = new Aluno(
                      body.nome || usuarios.nome,
                      body.email|| usuarios.email,
                      body.senha|| usuarios.senha
                      )
                const parametro = 
                [DadoNovoAluno.nome, 
                  DadoNovoAluno.email, 
                  DadoNovoAluno.senha, id];
              const UsuarioAtual = DadosDAO.alterarUsuario(parametro)
                .then((result) => {
                  res.send(UsuarioAtual)
                })
                .catch((error) => {
                  res.send(err);
                })


        })

        app.delete('/aluno/:id', (req, res) => {
              DadosDAO.deletaUsuario(req.params.id)
              .then((resultado)=>{
                res.send(`Usuário deletado com sucesso`);
              }).catch((err)=>{
                res.send(err);
              })

        })   
        }


module.exports = aluno; //exportando a função




// app.post('/aluno', (req, res) => {
//   const NovoAluno = new Aluno(req.body.nome, req.body.email, req.body.senha);
//   bd.aluno.push(NovoAluno);
//   res.send({ "NovoAluno": NovoAluno });


// })
// //rota passando paramentro
// app.get('/aluno/:email', (req, res) => {
// const email = req.params.email
// for(let i = 0; i <= bd.aluno.length; i++ ){//percorrendo meu array meu banco
//   if(bd.aluno[i].email == email ){// comparando o parametro q recebo com todos os email q estão no banco
//     res.send(bd.aluno[i])//enviando o resultado da comparação
//   }
// }
// })
// app.put('/aluno/:nome', (req, res) => {
//   const nome = req.params.nome
//   const body = req.body
//   for(let i = 0; i <= bd.aluno.length; i++ ){
//     if(bd.aluno[i].nome == nome ){
//       const DadoAntigo = bd.aluno[i];
//       const DadoNovoAluno = new Aluno(
//       body.nome || DadoAntigo.nome,
//       body.email|| DadoAntigo.email,
//       body.senha|| DadoAntigo.senha
//       )
//       bd.aluno.splice(i,1,DadoNovoAluno)
//       res.json({"Aluno Alterado": DadoNovoAluno,
//        "DadosAntigos:": DadoAntigo})
      
//   }
// }
//   })

// app.delete('/aluno/:nome', (req, res) => {
//   // achar no banco o que a dado q é igual ao parametro passado
//   // se achou deletar do array  envia q deletou
//   // se n achou n encontrou 
// const nome = req.params.nome;
// const alunoIndex = bd.aluno.findIndex(aluno=> aluno.nome == nome )

// if(alunoIndex > -1){
//   const alunoDeletado = bd.aluno.splice(alunoIndex,1)
//   res.json({"alunodeletado": alunoDeletado,
//               "indexAluno": alunoIndex})
// }else{
//   res.json("Aluno não encontrado")
// }
// })

// module.exports = Obejto = {
//     msg:"isso é um objeto"
// };

// function soma(a,b){
//     return a + b
// }
// module.exports = soma;

// module.exports = kassiane = 'kassiane loopes '
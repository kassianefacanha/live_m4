const Livros = require('../models/livros-model');
const LivroDAO = require('../DAO/LivroDao')

const livros = (app, bdSQLite)=>{

    const DAOLivro = new LivroDAO(bdSQLite);

    // ROTA PARA PUXAR LiVROS
    app.get('/livros', (req, res)=>{
        const data = async()=>{
            try{
                const livros = await DAOLivro.listarLivros();
                res.status(200).json(livros)
            }catch(error){
                res.status(404).json(error)
            }
        }
        data();
        
    })
    // ROTA PARA PUXAR LIVRO POR PARAMETRO
    app.get('/livros/:id', (req, res)=>{
        const data = async()=>{
            try{
                const livros = await DAOLivro.listarLivrosID(req.params.id);
                res.status(200).json(livros)
            }catch(error){
                res.status(404).json(error)
            }
        }
        data();
      
    })
    // ROTA PARA CADASTRAR LiVROS
    app.post('/livros', (req, res)=>{
        body = req.body;
        const NovoLivro = new Livros(body.title, body.descricao, body.editora)
        const data = async()=>{
            try{
                const livros = await DAOLivro.CadastrarLivros(NovoLivro);
                res.status(201).json(livros)
            }catch(error){
                res.status(404).json(error)
            }
        }
        data();
      
    })
    // ROTA PARA ALTERAR LIVROS
    app.put('/livros/:id', (req, res)=>{
        body = req.body;
        id = req.params.id;
            const data = async()=>{
                try{
                    const LivroDadosAntigo= await DAOLivro.listarLivrosID(id);
                    const LivroAtualizado = new 
                        Livros(body.title || LivroDadosAntigo[0].title, 
                                body.descricao || LivroDadosAntigo[0].descricao, 
                                body.editora || LivroDadosAntigo[0].editora)

                    const parametro = 
                    [LivroAtualizado.title, 
                        LivroAtualizado.descricao, 
                        LivroAtualizado.editora, 
                        id]
                        console.log(parametro)
                    const livros = await DAOLivro.AlterarLivro(parametro);
                    res.status(201).json(livros)
                }catch(error){
                    res.status(404).json(error)
                }
            }
            data();   
        
    })   
    // ROTA PARA DELETAR LIVROS
    app.delete('/livros/:id', (req, res)=>{
        const data = async()=>{
            try{
                const livros = await DAOLivro.DeletarLivro(req.params.id);
                res.status(201).json(livros)
            }catch(error){
                res.status(404).json(error)
            }
        }
        data();
    })
}

module.exports = livros;
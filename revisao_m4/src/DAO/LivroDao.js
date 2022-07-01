class LivroDAO{
    constructor(bd){
        this.bd = bd;
    }
    listarLivros(){
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM LIVROS`, (error, resultado)=>{
                if(error) reject(error);
                else resolve(resultado)
            })
        })
    }
    listarLivrosID(id){
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM LIVROS WHERE id = ${id}`, (error, resultado)=>{
                if(error) reject(error);
                else resolve(resultado)
            })
        })
    }
    CadastrarLivros(Livro){
        return new Promise((resolve, reject) => {
            this.bd.run(
                `INSERT INTO LIVROS (title, descricao, editora)
                 VALUES (?, ?, ?) `,
                 [Livro.title, Livro.descricao, Livro.editora],
            (error)=>{
                if(error) reject(error);
                else resolve('DEU CERTO INSERIR LIVRO')
            })
        })
    }
    AlterarLivro(LivroAtualizado){
        return new Promise((resolve, reject) => {
            this.bd.run(`
            UPDATE LIVROS 
            SET title = ?, descricao = ? , editora = ?  WHERE id = ?`, LivroAtualizado,
             (error)=>{
                if(error) reject(error);
                else resolve('DEU CERTO ALTERAR LIVRO')
            })
        })
    }
    DeletarLivro(id){
        return new Promise((resolve, reject) => {
            this.bd.run(`DELETE FROM LIVROS WHERE id = ${id} `, (error)=>{
                if(error) reject(error);
                else resolve("DEU CERTO DELETAR LIVRO")
    
            })
         })
    }
    
}

module.exports = LivroDAO;
let id = 0;
class Aluno {
    constructor(nome, email, senha) {
        this.id = id++;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    
}


module.exports = Aluno;
// export {Aluno}

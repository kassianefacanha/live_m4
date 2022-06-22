let id = 0;
class Aluno {
    constructor(nome, email, senha) {
        this.id = id++;
        this.nome = nome;
        this.email = email;
        this.senha = this.validarSenha(senha);
    }

    validarSenha(senha){
        if(senha.length <= 5){
            return senha
        }else{
            throw new Error("SENHA DEVE TER MENOS QUE 5 CARACTERES")
        }
    }
}


module.exports = Aluno;
// export {Aluno}

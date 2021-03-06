class AlunoDao {
  constructor(bd) {
    this.bd = bd;
  }
  listarAluno() {
    return new Promise((resolve, reject) => {
      this.bd.all(`SELECT * FROM USUARIOS`, (error, resultado) => {
        if (error) {
          reject("Erro ao selecionar o banco")
        } else {
          resolve({ "TABLE SELECIONADA": resultado });
        }
      })
    })
  }
  listarUsuariosID(id) {
    return new Promise((resolve, reject) => {
      this.bd.all('SELECT * FROM USUARIOS  WHERE id = ?', [id], (error, rows) => {
        if (error) {
          reject({ "ERRO": error.message })
        } else {
          resolve({ "usuarios": rows })
        }
      })
    })
  }

  insereUsuario(novoUsuario) {
    return new Promise((resolve, reject) => {
      this.bd.run(`INSERT INTO USUARIOS ( NOME, EMAIL, SENHA) VALUES (?,?,?)`,
        [novoUsuario.nome, novoUsuario.email, novoUsuario.senha],
        (error) => {
          if (error) {
            reject('Usuário não pôde ser inserido')
          } else {
            resolve('Usuário inserido com sucesso')
          }
        })
    })
  }
  alterarUsuario(UsuarioAtualizado) {
    return new Promise((resolve, reject) => {
      this.bd.run('UPDATE USUARIOS SET NOME = ?, EMAIL = ?, SENHA = ? WHERE id = ?',
       UsuarioAtualizado, (erro) => {
        if (erro) reject('Não foi possível atualizar o usuário');
        else resolve('Usuário atualizado');
      });
    })
  }
  deletaUsuario(id) {
    return new Promise((resolve, reject) => {
      this.bd.run(`DELETE FROM USUARIOS WHERE ID=${id}`,
        (err) => {
          if (err) {
            reject(err)
          } else {
            resolve('Usuário deletado com sucesso')
          }
        })
    })
  }

}
module.exports = AlunoDao;
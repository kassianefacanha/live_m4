class AlunoDao{
    constructor(bd){
        this.bd = bd;
    }
    listarAluno(){
        return new Promise((resolve, reject)=>{ 
            this.bd.all(`SELECT * FROM USUARIOS`, (error, resultado)=>{
                if(error){
                  reject("Erro ao selecionar o banco")
                }else{
                  resolve({"TABLE SELECIONADA": resultado});
                }
              })
        })
    }

}
module.exports = AlunoDao;
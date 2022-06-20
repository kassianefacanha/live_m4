
module.exports = aluno = (app)=>{ 

    app.get('/aluno', (req, res) => {
        res.send('Rota aluno')
    });

}


const aluno = (app)=>{
    app.get('/aluno', (req, res) => {
        res.send('ROTA ALUNO');
    })
    app.post('/aluno', (req, res) => {
        const body = req.body;
        res.send( body);
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
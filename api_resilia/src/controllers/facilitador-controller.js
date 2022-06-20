const facilitador = (app)=>{
    app.get('/facilitador', (req, res) => {
        res.send('ROTA facilitador');
    })
    app.post('/facilitador', (req, res) => {
        res.send('ROTA POST facilitador');
    })
}

module.exports = facilitador; //exportando a função

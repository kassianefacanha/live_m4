const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send('TESTANTO')
})

app.get('/home',(req,res)=>{
    res.send('TESTANTO 2')
    
} )

app.listen(8080, ()=>{ console.log("RODANDO SERVIDOR NA PORTA 8080")})
const request = require('supertest')
const UrlAPI = "http://localhost:3333"

describe('UrlAPI', () => {
    test('TESTAR ROTA ALUNO', ()=>{
        return request(UrlAPI).get('/aluno')
        .then((resposta) =>{
                expect(resposta.statusCode).toBe(200)
        })
    })
})
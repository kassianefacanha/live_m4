const sum = require('./sum')

test("CASO DE TESTE DE 1 + 2",()=>{
    expect(sum(1,2)).toBe(3)
})

test("CASO DE TESTE DE 2 + 2",()=>{
    expect(sum(2,2)).toBe(4)
})
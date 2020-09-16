const express = require('express')
const app = express()

// http://localhost:3000/tabela?linha=10&colunas=10
app.get('/tabela', function(req, resp, next){
    req.tabela = {
        linhas: parseInt(req.query.linha), 
        colunas: parseInt(req.query.colunas)
    }
    console.log('entrou aqui f1....')
    next()
})


app.get('/tabela', function(req, resp){
    let num = 1
    let tabela = '<table border="1">'
    
    for (let l = 0; l < req.tabela.linhas; l++) {
        tabela += '<tr>'
        for (let c = 0; c < req.tabela.colunas; c++) {
            tabela += `<td>${num}</td>`
            num++
        }
        tabela += '</tr>'
    }
    
    tabela += '</tabela>'

    resp.send(tabela)
})

app.listen(3000, () => console.log('Iniciou...'))

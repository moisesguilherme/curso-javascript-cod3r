const moduloA  = require('../../moduloA') // moduloa -> funciona no windows mac e náo no linux
//const moduloA  = require('/Users/Moises/Desktop/DEV/Coder/exercicios-js/node/moduloA')
console.log(moduloA.ola)

const saudacao = require('saudacao') //Aqui vai dar erro pq precisa de ter o arquivo saudacao no node_modules
console.log(saudacao.ola)

const c = require('./pastaC') //abre o index.js automático
console.log(c.ola2)

// const http = require('http') //módulo core
// http.createServer((req, res) => {
//     res.write('Bom dia')
//     res.end()
// }).listen(8080)




//app.use(express.json()) -> caso for usar o body JSON
//Esse exemplo usa o x-www-form-urlencoded


const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')


app.use(bodyParser.urlencoded({ extended: true }))

//Função Middleware.
// app.post('/produtos', (req, res, next) => {
//   console.log("Middleware 1...")
//   next();
// })

// app.use((req, res, next) => {
//     res.send("Aqui vai receber qualquer chamada");
//     next();
// })

app.get('/produtos', (req, res, next) => {
     res.send(bancoDeDados.getProdutos())
     //res.send({nome: 'Notebook', preco: 123.45})  //Converter para JSON
  })

app.get('/produtos/:id', (req, res, next) => {
  res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
  
  console.log(" >>>" , req.body.name);

  const produto = bancoDeDados.salvarProduto({
    nome: req.body.name,
    preco: req.body.preco
  })
  
  res.send(produto) //JSON
})


app.put('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.name,
    preco: req.body.preco
 })
 
 res.send(produto) //JSON
})


// app.patch('/produtos/:id', (req, res, next) => {
//   const produto = bancoDeDados.salvarProduto({
//     id: req.params.id,
//     nome: req.body.name,
//     preco: req.body.preco
//  })
 
//  res.send(produto) //JSON
// })


app.delete('/produtos/:id', (req, res, next) => {
  console.log(req.params.id)
  const produto = bancoDeDados.exlcuirProduto(req.params.id)
  res.send(produto) //JSON
})


app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})


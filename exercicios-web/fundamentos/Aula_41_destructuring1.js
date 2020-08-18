// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// Usando o destructuring
// Tire do objeto o atributo nome e idade, qual objeto? pessoa
const { nome, idade } = pessoa
console.log(nome, idade) // Ana 5

const { nome: n, idade: i} = pessoa
console.log(n, i) //Ana 5

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada) //undefined true

//Acessar o logradouro e numero obs, ele não cria a variável endereco, e sim extrai dessa propriedade
//const { endereco: {logradouro, numero, cep}} = pessoa
//console.log(logradouro, numero, cep) //Rua ABC 1000 undefined

//const { conta: {ag, num }} = pessoa //Destruturar um dado *aninhado
//console.log(ag, num) // const { conta: {ag, num }} = pessoa // Cannot destructure property `ag` of 'undefined' or 'null'.


//teste
const { endereco: {logradouro: log}} = pessoa
console.log(log)
console.log('teste')

let a = 5
let b = a  //copia por valor, o próprio valor de 5

a++ // a = a + 1
b--

console.log(a, b)

//por referência
let x = { nome: 'Ana'}
let y = x

y.nome = 'Gui'
//console.log(x)

//Se for constante não deixa alterar o endereço de memória
const x1 = {nome: "Ana"}
//const x1 = Object.freeze({ nome: 'Ana'}) //Não deixa alterar o objeto
const y1 = x1

//x1 = {nome: 'Jose'} // Erro Assigment to constant variable

function mudar(obj) {
    obj.nome = 'Gui'
}
mudar(y1)

//y1.nome = 'Gui'
console.log(x1)

// Valores primitivos smpre é passado uma Copia desse valor
// Objeto, array função sempre é referência

let a1 = 3

function mudar1(valor){
    valor++
}

mudar(a1)
console.log(a1)


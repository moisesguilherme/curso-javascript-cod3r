//Observar o objeto abaixo
const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // [ 'nome', 'idade', 'peso' ]
console.log(Object.values(pessoa)) // [ 'Rebeca', 2, 13 ]
console.log(Object.entries(pessoa)) // [ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ]

//Usando o forEach para pegar cada elemento
Object.entries(pessoa).forEach( e => {
    console.log(`${e[0]}: ${e[1]}`)
})

//usando o destructing com chave, valor
Object.entries(pessoa).forEach( ([chave, valor]) =>{
    console.log(`${chave}: ${valor}`)
})

// Definir um atribudo em um objeto, que não pode ser alterado
Object.defineProperty (pessoa, 'dataNascimento', {
    enumerable: false, //se vai ser visível o nome do atributo
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
// console.log(pessoa.dataNascimento)
// console.log(Object.keys(pessoa))

 // Object.assing (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) //vai adicionar os objetos, 01 e 02 no dest

Object.freeze(obj)
obj.c = 1234
// console.log(obj)

